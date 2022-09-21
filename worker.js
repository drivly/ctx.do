import { jwtVerify } from 'jose'
import { getDistance } from 'geolib'
import { UAParser } from 'ua-parser-js'

const interactionCounter = {}
const hashes = {}

export default {
  fetch: async (req, env) => {
    const ip = req.headers.get('CF-Connecting-IP')
    const { url, cf, method } = req
    const { timezone, latitude, longitude } = cf
    const { hostname, pathname, search, searchParams, hash, origin } = new URL(url)
    const pathSegments = pathname.slice(1).split('/')
    const headers = Object.fromEntries(req.headers)
    const authCookie = '__Session-worker.auth.providers-token='
    let body = ''
    try {
      body = req.body ? await req.json() : undefined
    } catch { body = undefined }
    interactionCounter[ip] = interactionCounter[ip] ? interactionCounter[ip] + 1 : 1
    const ts = Date.now()
    const time = new Date(ts).toISOString()
    const localTime = new Date(ts).toLocaleString("en-US", { timeZone: cf.timezone })

    let profile = null
    const token = req.headers.get('cookie')?.split(';')?.find(c => c.trim().startsWith(authCookie))?.trim()?.slice(authCookie.length)
    let jwt = null
    if (token) {
      try {
        jwt = hashes[token] || (hashes[token] = await jwtVerify(token, new Uint8Array(await crypto.subtle.digest('SHA-384', new TextEncoder().encode(env.JWT_SECRET + new URL(req.url).hostname)))))
        profile = jwt?.payload?.profile
      } catch (error) {
        console.error({ error })
      }
    } else if (req.headers.get('x-api-key') || searchParams.get('apikey')) {
      profile = (await env.APIKEYS.fetch(req).then(res => res.ok && res.json()))?.profile || null
    }

    const colo = locations.find((loc) => loc.iata === req.cf.colo)
    const edgeDistance = Math.round(
      getDistance({ latitude, longitude }, { latitude: colo?.lat, longitude: colo?.lon }) / 1609
    )

    const requestId = req.headers.get('cf-ray') + '-' + req.cf.colo

    const userAgent = headers['user-agent']
    const ua = new UAParser(userAgent).getResult()

    return new Response(
      JSON.stringify({
        api: {
          icon: '🌎',
          name: 'ctx.do',
          description: 'Context Enrichment',
          url: 'https://ctx.do',
          endpoints: {
            context: 'https://ctx.do/api',
          },
          memberOf: 'https://apis.do/core',
          login: origin + '/login',
          logout: origin + '/logout',
          repo: 'https://github.com/drivly/ctx.do',
        },
        colo,
        hostname, pathname, search, hash, origin,
        query: Object.fromEntries(searchParams),
        pathSegments,
        ts,
        time,
        body,
        url,
        method,
        userAgent,
        ua,
        jwt: jwt || undefined,
        cf,
        requestId,
        headers,
        user: {
          authenticated: profile !== null,
          profile: profile || undefined,
          plan: '🛠 Build',
          ip,
          isp: req.cf.asOrganization,
          flag: flags[req.cf.country],
          zipcode: req.cf.postalCode,
          city: req.cf.city,
          metro: metros[req.cf.metroCode],
          region: req.cf.region,
          country: countries.find((loc) => loc.cca2 === req.cf.country)?.name,
          continent: continents[req.cf.continent],
          requestId,
          localTime,
          timezone,
          edgeLocation: colo?.city,
          edgeDistance,
          latencyMilliseconds: req.cf.clientTcpRtt,
          recentInteractions: interactionCounter[ip],
          trustScore: req.cf?.botManagement?.score,
        },
      }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' } }
    )
  },
}

const locations = [
  {
    iata: "TIA",
    lat: 41.4146995544,
    lon: 19.7206001282,
    cca2: "AL",
    region: "Europe",
    city: "Tirana"
  },
  {
    iata: "ALG",
    lat: 36.6910018921,
    lon: 3.2154099941,
    cca2: "DZ",
    region: "Africa",
    city: "Algiers"
  },
  {
    iata: "LAD",
    lat: -8.8583698273,
    lon: 13.2312002182,
    cca2: "AO",
    region: "Africa",
    city: "Luanda"
  },
  {
    iata: "EZE",
    lat: -34.8222,
    lon: -58.5358,
    cca2: "AR",
    region: "South America",
    city: "Buenos Aires"
  },
  {
    iata: "COR",
    lat: -31.31,
    lon: -64.208333,
    cca2: "AR",
    region: "South America",
    city: "Córdoba"
  },
  {
    iata: "NQN",
    lat: -38.9490013123,
    lon: -68.1557006836,
    cca2: "AR",
    region: "South America",
    city: "Neuquen"
  },
  {
    iata: "EVN",
    lat: 40.1473007202,
    lon: 44.3959007263,
    cca2: "AM",
    region: "Middle East",
    city: "Yerevan"
  },
  {
    iata: "ADL",
    lat: -34.9431729,
    lon: 138.5335637,
    cca2: "AU",
    region: "Oceania",
    city: "Adelaide"
  },
  {
    iata: "BNE",
    lat: -27.3841991425,
    lon: 153.117004394,
    cca2: "AU",
    region: "Oceania",
    city: "Brisbane"
  },
  {
    iata: "CBR",
    lat: -35.3069000244,
    lon: 149.1950073242,
    cca2: "AU",
    region: "Oceania",
    city: "Canberra"
  },
  {
    iata: "HBA",
    lat: -42.883209,
    lon: 147.331665,
    cca2: "AU",
    region: "Oceania",
    city: "Hobart"
  },
  {
    iata: "MEL",
    lat: -37.6733016968,
    lon: 144.843002319,
    cca2: "AU",
    region: "Oceania",
    city: "Melbourne"
  },
  {
    iata: "PER",
    lat: -31.9402999878,
    lon: 115.967002869,
    cca2: "AU",
    region: "Oceania",
    city: "Perth"
  },
  {
    iata: "SYD",
    lat: -33.9460983276,
    lon: 151.177001953,
    cca2: "AU",
    region: "Oceania",
    city: "Sydney"
  },
  {
    iata: "VIE",
    lat: 48.1102981567,
    lon: 16.5697002411,
    cca2: "AT",
    region: "Europe",
    city: "Vienna"
  },
  {
    iata: "LLK",
    lat: 38.7463989258,
    lon: 48.8180007935,
    cca2: "AZ",
    region: "Middle East",
    city: "Astara"
  },
  {
    iata: "GYD",
    lat: 40.4674987793,
    lon: 50.0466995239,
    cca2: "AZ",
    region: "Middle East",
    city: "Baku"
  },
  {
    iata: "BAH",
    lat: 26.2707996368,
    lon: 50.6335983276,
    cca2: "BH",
    region: "Middle East",
    city: "Manama"
  },
  {
    iata: "CGP",
    lat: 22.2495995,
    lon: 91.8133011,
    cca2: "BD",
    region: "Asia Pacific",
    city: "Chittagong"
  },
  {
    iata: "DAC",
    lat: 23.843347,
    lon: 90.397783,
    cca2: "BD",
    region: "Asia Pacific",
    city: "Dhaka"
  },
  {
    iata: "JSR",
    lat: 23.1837997437,
    lon: 89.1607971191,
    cca2: "BD",
    region: "Asia Pacific",
    city: "Jashore"
  },
  {
    iata: "MSQ",
    lat: 53.9006,
    lon: 27.599,
    cca2: "BY",
    region: "Europe",
    city: "Minsk"
  },
  {
    iata: "BRU",
    lat: 50.9014015198,
    lon: 4.4844398499,
    cca2: "BE",
    region: "Europe",
    city: "Brussels"
  },
  {
    iata: "PBH",
    lat: 27.4712,
    lon: 89.6339,
    cca2: "BT",
    region: "Asia Pacific",
    city: "Thimphu"
  },
  {
    iata: "GBE",
    lat: -24.6282,
    lon: 25.9231,
    cca2: "BW",
    region: "Africa",
    city: "Gaborone"
  },
  {
    iata: "QWJ",
    lat: -22.738,
    lon: -47.334,
    cca2: "BR",
    region: "South America",
    city: "Americana"
  },
  {
    iata: "BEL",
    lat: -1.4563,
    lon: -48.5013,
    cca2: "BR",
    region: "South America",
    city: "Belém"
  },
  {
    iata: "CNF",
    lat: -19.624444,
    lon: -43.971944,
    cca2: "BR",
    region: "South America",
    city: "Belo Horizonte"
  },
  {
    iata: "BNU",
    lat: -26.89245,
    lon: -49.07696,
    cca2: "BR",
    region: "South America",
    city: "Blumenau"
  },
  {
    iata: "BSB",
    lat: -15.79824,
    lon: -47.90859,
    cca2: "BR",
    region: "South America",
    city: "Brasilia"
  },
  {
    iata: "CFC",
    lat: -26.7762,
    lon: -51.0125,
    cca2: "BR",
    region: "South America",
    city: "Cacador"
  },
  {
    iata: "VCP",
    lat: -22.90662,
    lon: -47.08576,
    cca2: "BR",
    region: "South America",
    city: "Campinas"
  },
  {
    iata: "CGB",
    lat: -15.59611,
    lon: -56.09667,
    cca2: "BR",
    region: "South America",
    city: "Cuiaba"
  },
  {
    iata: "CWB",
    lat: -25.5284996033,
    lon: -49.1758003235,
    cca2: "BR",
    region: "South America",
    city: "Curitiba"
  },
  {
    iata: "FLN",
    lat: -27.6702785492,
    lon: -48.5525016785,
    cca2: "BR",
    region: "South America",
    city: "Florianopolis"
  },
  {
    iata: "FOR",
    lat: -3.7762799263,
    lon: -38.5326004028,
    cca2: "BR",
    region: "South America",
    city: "Fortaleza"
  },
  {
    iata: "GYN",
    lat: -16.69727,
    lon: -49.26851,
    cca2: "BR",
    region: "South America",
    city: "Goiania"
  },
  {
    iata: "ITJ",
    lat: -27.6116676331,
    lon: -48.6727790833,
    cca2: "BR",
    region: "South America",
    city: "Itajai"
  },
  {
    iata: "JOI",
    lat: -26.304408,
    lon: -48.846383,
    cca2: "BR",
    region: "South America",
    city: "Joinville"
  },
  {
    iata: "JDO",
    lat: -7.2242,
    lon: -39.313,
    cca2: "BR",
    region: "South America",
    city: "Juazeiro do Norte"
  },
  {
    iata: "MAO",
    lat: -3.11286,
    lon: -60.01949,
    cca2: "BR",
    region: "South America",
    city: "Manaus"
  },
  {
    iata: "POA",
    lat: -29.9944000244,
    lon: -51.1713981628,
    cca2: "BR",
    region: "South America",
    city: "Porto Alegre"
  },
  {
    iata: "RAO",
    lat: -21.1363887787,
    lon: -47.7766685486,
    cca2: "BR",
    region: "South America",
    city: "Ribeirao Preto"
  },
  {
    iata: "GIG",
    lat: -22.8099994659,
    lon: -43.2505569458,
    cca2: "BR",
    region: "South America",
    city: "Rio de Janeiro"
  },
  {
    iata: "SSA",
    lat: -12.9086112976,
    lon: -38.3224983215,
    cca2: "BR",
    region: "South America",
    city: "Salvador"
  },
  {
    iata: "SJP",
    lat: -20.807157,
    lon: -49.378994,
    cca2: "BR",
    region: "South America",
    city: "São José do Rio Preto"
  },
  {
    iata: "GRU",
    lat: -23.4355564117,
    lon: -46.4730567932,
    cca2: "BR",
    region: "South America",
    city: "São Paulo"
  },
  {
    iata: "SOD",
    lat: -23.54389,
    lon: -46.63445,
    cca2: "BR",
    region: "South America",
    city: "Sorocaba"
  },
  {
    iata: "UDI",
    lat: -18.8836116791,
    lon: -48.225276947,
    cca2: "BR",
    region: "South America",
    city: "Uberlandia"
  },
  {
    iata: "BWN",
    lat: 4.903052,
    lon: 114.939819,
    cca2: "BN",
    region: "Asia Pacific",
    city: "Bandar Seri Begawan"
  },
  {
    iata: "SOF",
    lat: 42.6966934204,
    lon: 23.4114360809,
    cca2: "BG",
    region: "Europe",
    city: "Sofia"
  },
  {
    iata: "OUA",
    lat: 12.3531999588,
    lon: -1.5124200583,
    cca2: "BF",
    region: "Africa",
    city: "Ouagadougou"
  },
  {
    iata: "PNH",
    lat: 11.5466003418,
    lon: 104.84400177,
    cca2: "KH",
    region: "Asia Pacific",
    city: "Phnom Penh"
  },
  {
    iata: "YYC",
    lat: 51.113899231,
    lon: -114.019996643,
    cca2: "CA",
    region: "North America",
    city: "Calgary"
  },
  {
    iata: "YVR",
    lat: 49.193901062,
    lon: -123.183998108,
    cca2: "CA",
    region: "North America",
    city: "Vancouver"
  },
  {
    iata: "YWG",
    lat: 49.9099998474,
    lon: -97.2398986816,
    cca2: "CA",
    region: "North America",
    city: "Winnipeg"
  },
  {
    iata: "YOW",
    lat: 45.3224983215,
    lon: -75.6691970825,
    cca2: "CA",
    region: "North America",
    city: "Ottawa"
  },
  {
    iata: "YYZ",
    lat: 43.6772003174,
    lon: -79.6305999756,
    cca2: "CA",
    region: "North America",
    city: "Toronto"
  },
  {
    iata: "YUL",
    lat: 45.4706001282,
    lon: -73.7407989502,
    cca2: "CA",
    region: "North America",
    city: "Montréal"
  },
  {
    iata: "YXE",
    lat: 52.1707992554,
    lon: -106.699996948,
    cca2: "CA",
    region: "North America",
    city: "Saskatoon"
  },
  {
    iata: "ARI",
    lat: -18.348611,
    lon: -70.338889,
    cca2: "CL",
    region: "South America",
    city: "Arica"
  },
  {
    iata: "CCP",
    lat: -36.8201,
    lon: -73.0444,
    cca2: "CL",
    region: "South America",
    city: "Concepción"
  },
  {
    iata: "SCL",
    lat: -33.3930015564,
    lon: -70.7857971191,
    cca2: "CL",
    region: "South America",
    city: "Santiago"
  },
  {
    iata: "BOG",
    lat: 4.70159,
    lon: -74.1469,
    cca2: "CO",
    region: "South America",
    city: "Bogotá"
  },
  {
    iata: "MDE",
    lat: 6.16454,
    lon: -75.4231,
    cca2: "CO",
    region: "South America",
    city: "Medellín"
  },
  {
    iata: "SJO",
    lat: 9.9938602448,
    lon: -84.2088012695,
    cca2: "CR",
    region: "South America",
    city: "San José"
  },
  {
    iata: "ZAG",
    lat: 45.7429008484,
    lon: 16.0687999725,
    cca2: "HR",
    region: "Europe",
    city: "Zagreb"
  },
  {
    iata: "CUR",
    lat: 12.1888999939,
    lon: -68.9598007202,
    cca2: "CW",
    region: "South America",
    city: "Willemstad"
  },
  {
    iata: "LCA",
    lat: 34.8750991821,
    lon: 33.6249008179,
    cca2: "CY",
    region: "Europe",
    city: "Nicosia"
  },
  {
    iata: "PRG",
    lat: 50.1007995605,
    lon: 14.2600002289,
    cca2: "CZ",
    region: "Europe",
    city: "Prague"
  },
  {
    iata: "CPH",
    lat: 55.6179008484,
    lon: 12.6560001373,
    cca2: "DK",
    region: "Europe",
    city: "Copenhagen"
  },
  {
    iata: "JIB",
    lat: 11.5473003387,
    lon: 43.1595001221,
    cca2: "DJ",
    region: "Africa",
    city: "Djibouti"
  },
  {
    iata: "SDQ",
    lat: 18.4297008514,
    lon: -69.6688995361,
    cca2: "DO",
    region: "North America",
    city: "Santo Domingo"
  },
  {
    iata: "GYE",
    lat: -2.1894,
    lon: -79.8891,
    cca2: "EC",
    region: "South America",
    city: "Guayaquil"
  },
  {
    iata: "UIO",
    lat: -0.1291666667,
    lon: -78.3575,
    cca2: "EC",
    region: "South America",
    city: "Quito"
  },
  {
    iata: "TLL",
    lat: 59.4132995605,
    lon: 24.8327999115,
    cca2: "EE",
    region: "Europe",
    city: "Tallinn"
  },
  {
    iata: "HEL",
    lat: 60.317199707,
    lon: 24.963300705,
    cca2: "FI",
    region: "Europe",
    city: "Helsinki"
  },
  {
    iata: "MRS",
    lat: 43.439271922,
    lon: 5.2214241028,
    cca2: "FR",
    region: "Europe",
    city: "Marseille"
  },
  {
    iata: "CDG",
    lat: 49.0127983093,
    lon: 2.5499999523,
    cca2: "FR",
    region: "Europe",
    city: "Paris"
  },
  {
    iata: "TBS",
    lat: 41.6692008972,
    lon: 44.95470047,
    cca2: "GE",
    region: "Europe",
    city: "Tbilisi"
  },
  {
    iata: "TXL",
    lat: 52.5597000122,
    lon: 13.2876996994,
    cca2: "DE",
    region: "Europe",
    city: "Berlin"
  },
  {
    iata: "DUS",
    lat: 51.2895011902,
    lon: 6.7667798996,
    cca2: "DE",
    region: "Europe",
    city: "Düsseldorf"
  },
  {
    iata: "FRA",
    lat: 50.0264015198,
    lon: 8.543129921,
    cca2: "DE",
    region: "Europe",
    city: "Frankfurt"
  },
  {
    iata: "HAM",
    lat: 53.6304016113,
    lon: 9.9882297516,
    cca2: "DE",
    region: "Europe",
    city: "Hamburg"
  },
  {
    iata: "MUC",
    lat: 48.3538017273,
    lon: 11.7861003876,
    cca2: "DE",
    region: "Europe",
    city: "Munich"
  },
  {
    iata: "ACC",
    lat: 5.614818,
    lon: -0.205874,
    cca2: "GH",
    region: "Africa",
    city: "Accra"
  },
  {
    iata: "ATH",
    lat: 37.9364013672,
    lon: 23.9444999695,
    cca2: "GR",
    region: "Europe",
    city: "Athens"
  },
  {
    iata: "SKG",
    lat: 40.5196990967,
    lon: 22.9708995819,
    cca2: "GR",
    region: "Europe",
    city: "Thessaloniki"
  },
  {
    iata: "GND",
    lat: 12.007116,
    lon: -61.7882288,
    cca2: "GD",
    region: "South America",
    city: "St. George's"
  },
  {
    iata: "GUM",
    lat: 13.4834003448,
    lon: 144.796005249,
    cca2: "GU",
    region: "Asia Pacific",
    city: "Hagatna"
  },
  {
    iata: "GUA",
    lat: 14.5832996368,
    lon: -90.5274963379,
    cca2: "GT",
    region: "North America",
    city: "Guatemala City"
  },
  {
    iata: "GEO",
    lat: 6.825648,
    lon: -58.163756,
    cca2: "GY",
    region: "South America",
    city: "Georgetown"
  },
  {
    iata: "PAP",
    lat: 18.5799999237,
    lon: -72.2925033569,
    cca2: "HT",
    region: "North America",
    city: "Port-au-Prince"
  },
  {
    iata: "TGU",
    lat: 14.0608,
    lon: -87.2172,
    cca2: "HN",
    region: "South America",
    city: "Tegucigalpa"
  },
  {
    iata: "HKG",
    lat: 22.3089008331,
    lon: 113.915000916,
    cca2: "HK",
    region: "Asia Pacific",
    city: "Hong Kong"
  },
  {
    iata: "BUD",
    lat: 47.4369010925,
    lon: 19.2555999756,
    cca2: "HU",
    region: "Europe",
    city: "Budapest"
  },
  {
    iata: "KEF",
    lat: 63.9850006104,
    lon: -22.6056003571,
    cca2: "IS",
    region: "Europe",
    city: "Reykjavík"
  },
  {
    iata: "AMD",
    lat: 23.0225,
    lon: 72.5714,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Ahmedabad"
  },
  {
    iata: "BLR",
    lat: 13.7835719,
    lon: 76.6165937,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Bangalore"
  },
  {
    iata: "BBI",
    lat: 20.2961,
    lon: 85.8245,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Bhubaneswar"
  },
  {
    iata: "IXC",
    lat: 30.673500061,
    lon: 76.7884979248,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Chandigarh"
  },
  {
    iata: "MAA",
    lat: 12.9900054932,
    lon: 80.1692962646,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Chennai"
  },
  {
    iata: "HYD",
    lat: 17.2313175201,
    lon: 78.4298553467,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Hyderabad"
  },
  {
    iata: "KNU",
    lat: 26.4499,
    lon: 80.3319,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Kanpur"
  },
  {
    iata: "CCU",
    lat: 22.6476933,
    lon: 88.4349249,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Kolkata"
  },
  {
    iata: "BOM",
    lat: 19.0886993408,
    lon: 72.8678970337,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Mumbai"
  },
  {
    iata: "NAG",
    lat: 21.1610714,
    lon: 79.0024702,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Nagpur"
  },
  {
    iata: "DEL",
    lat: 28.5664997101,
    lon: 77.1031036377,
    cca2: "IN",
    region: "Asia Pacific",
    city: "New Delhi"
  },
  {
    iata: "PAT",
    lat: 25.591299057,
    lon: 85.0879974365,
    cca2: "IN",
    region: "Asia Pacific",
    city: "Patna"
  },
  {
    iata: "CGK",
    lat: -6.1275229,
    lon: 106.6515118,
    cca2: "ID",
    region: "Asia Pacific",
    city: "Jakarta"
  },
  {
    iata: "JOG",
    lat: -7.7881798744,
    lon: 110.4319992065,
    cca2: "ID",
    region: "Asia Pacific",
    city: "Yogyakarta"
  },
  {
    iata: "BGW",
    lat: 33.2625007629,
    lon: 44.2346000671,
    cca2: "IQ",
    region: "Middle East",
    city: "Baghdad"
  },
  {
    iata: "BSR",
    lat: 30.5491008759,
    lon: 47.6621017456,
    cca2: "IQ",
    region: "Middle East",
    city: "Basra"
  },
  {
    iata: "EBL",
    lat: 36.1901,
    lon: 43.993,
    cca2: "IQ",
    region: "Middle East",
    city: "Erbil"
  },
  {
    iata: "NJF",
    lat: 31.989722,
    lon: 44.404167,
    cca2: "IQ",
    region: "Middle East",
    city: "Najaf"
  },
  {
    iata: "XNH",
    lat: 30.9358005524,
    lon: 46.0900993347,
    cca2: "IQ",
    region: "Middle East",
    city: "Nasiriyah"
  },
  {
    iata: "ORK",
    lat: 51.8413009644,
    lon: -8.491109848,
    cca2: "IE",
    region: "Europe",
    city: "Cork"
  },
  {
    iata: "DUB",
    lat: 53.4212989807,
    lon: -6.270070076,
    cca2: "IE",
    region: "Europe",
    city: "Dublin"
  },
  {
    iata: "HFA",
    lat: 32.78492,
    lon: 34.96069,
    cca2: "IL",
    region: "Middle East",
    city: "Haifa"
  },
  {
    iata: "TLV",
    lat: 32.0113983154,
    lon: 34.8866996765,
    cca2: "IL",
    region: "Middle East",
    city: "Tel Aviv"
  },
  {
    iata: "MXP",
    lat: 45.6305999756,
    lon: 8.7281103134,
    cca2: "IT",
    region: "Europe",
    city: "Milan"
  },
  {
    iata: "PMO",
    lat: 38.16114,
    lon: 13.31546,
    cca2: "IT",
    region: "Europe",
    city: "Palermo"
  },
  {
    iata: "FCO",
    lat: 41.8045005798,
    lon: 12.2508001328,
    cca2: "IT",
    region: "Europe",
    city: "Rome"
  },
  {
    iata: "OKA",
    lat: 26.1958,
    lon: 127.646,
    cca2: "JP",
    region: "Asia Pacific",
    city: "Naha"
  },
  {
    iata: "KIX",
    lat: 34.4272994995,
    lon: 135.244003296,
    cca2: "JP",
    region: "Asia Pacific",
    city: "Osaka"
  },
  {
    iata: "NRT",
    lat: 35.7647018433,
    lon: 140.386001587,
    cca2: "JP",
    region: "Asia Pacific",
    city: "Tokyo"
  },
  {
    iata: "AMM",
    lat: 31.7226009369,
    lon: 35.9931983948,
    cca2: "JO",
    region: "Middle East",
    city: "Amman"
  },
  {
    iata: "ALA",
    lat: 43.3521003723,
    lon: 77.0404968262,
    cca2: "KZ",
    region: "Asia Pacific",
    city: "Almaty"
  },
  {
    iata: "MBA",
    lat: -4.0348300934,
    lon: 39.5942001343,
    cca2: "KE",
    region: "Africa",
    city: "Mombasa"
  },
  {
    iata: "NBO",
    lat: -1.319239974,
    lon: 36.9277992249,
    cca2: "KE",
    region: "Africa",
    city: "Nairobi"
  },
  {
    iata: "ICN",
    lat: 37.4691009521,
    lon: 126.450996399,
    cca2: "KR",
    region: "Asia Pacific",
    city: "Seoul"
  },
  {
    iata: "KWI",
    lat: 29.226600647,
    lon: 47.9688987732,
    cca2: "KW",
    region: "Middle East",
    city: "Kuwait City"
  },
  {
    iata: "VTE",
    lat: 17.9757,
    lon: 102.5683,
    cca2: "LA",
    region: "Asia Pacific",
    city: "Vientiane"
  },
  {
    iata: "RIX",
    lat: 56.9235992432,
    lon: 23.9710998535,
    cca2: "LV",
    region: "Europe",
    city: "Riga"
  },
  {
    iata: "BEY",
    lat: 33.8208999634,
    lon: 35.4883995056,
    cca2: "LB",
    region: "Middle East",
    city: "Beirut"
  },
  {
    iata: "ROB",
    lat: 6.239127,
    lon: -10.35462,
    cca2: "LR",
    region: "Africa",
    city: "Monrovia"
  },
  {
    iata: "VNO",
    lat: 54.6341018677,
    lon: 25.2858009338,
    cca2: "LT",
    region: "Europe",
    city: "Vilnius"
  },
  {
    iata: "LUX",
    lat: 49.6265983582,
    lon: 6.211520195,
    cca2: "LU",
    region: "Europe",
    city: "Luxembourg City"
  },
  {
    iata: "MFM",
    lat: 22.1495990753,
    lon: 113.592002869,
    cca2: "MO",
    region: "Asia Pacific",
    city: "Macau"
  },
  {
    iata: "TNR",
    lat: -18.91368,
    lon: 47.53613,
    cca2: "MG",
    region: "Africa",
    city: "Antananarivo"
  },
  {
    iata: "JHB",
    lat: 1.635848,
    lon: 103.665943,
    cca2: "MY",
    region: "Asia Pacific",
    city: "Johor Bahru"
  },
  {
    iata: "KUL",
    lat: 2.745579958,
    lon: 101.709999084,
    cca2: "MY",
    region: "Asia Pacific",
    city: "Kuala Lumpur"
  },
  {
    iata: "MLE",
    lat: 4.1748,
    lon: 73.50888,
    cca2: "MV",
    region: "Asia Pacific",
    city: "Male"
  },
  {
    iata: "MRU",
    lat: -20.4302005768,
    lon: 57.6836013794,
    cca2: "MU",
    region: "Africa",
    city: "Port Louis"
  },
  {
    iata: "MEX",
    lat: 19.4363002777,
    lon: -99.0720977783,
    cca2: "MX",
    region: "North America",
    city: "Mexico City"
  },
  {
    iata: "QRO",
    lat: 20.6173000336,
    lon: -100.185997009,
    cca2: "MX",
    region: "North America",
    city: "Queretaro"
  },
  {
    iata: "KIV",
    lat: 46.9277000427,
    lon: 28.9309997559,
    cca2: "MD",
    region: "Europe",
    city: "Chișinău"
  },
  {
    iata: "ULN",
    lat: 47.8431015015,
    lon: 106.766998291,
    cca2: "MN",
    region: "Asia Pacific",
    city: "Ulaanbaatar"
  },
  {
    iata: "CMN",
    lat: 33.3675003052,
    lon: -7.5899701118,
    cca2: "MA",
    region: "Africa",
    city: "Casablanca"
  },
  {
    iata: "MPM",
    lat: -25.9207992554,
    lon: 32.5726013184,
    cca2: "MZ",
    region: "Africa",
    city: "Maputo"
  },
  {
    iata: "MDL",
    lat: 39.2276,
    lon: -74.63704,
    cca2: "MM",
    region: "Asia Pacific",
    city: "Mandalay"
  },
  {
    iata: "RGN",
    lat: 16.9073009491,
    lon: 96.1332015991,
    cca2: "MM",
    region: "Asia Pacific",
    city: "Yangon"
  },
  {
    iata: "KTM",
    lat: 27.6965999603,
    lon: 85.3591003418,
    cca2: "NP",
    region: "Asia Pacific",
    city: "Kathmandu"
  },
  {
    iata: "AMS",
    lat: 52.3086013794,
    lon: 4.7638897896,
    cca2: "NL",
    region: "Europe",
    city: "Amsterdam"
  },
  {
    iata: "NOU",
    lat: -22.0146007538,
    lon: 166.212997436,
    cca2: "NC",
    region: "Oceania",
    city: "Noumea"
  },
  {
    iata: "AKL",
    lat: -37.0080986023,
    lon: 174.792007446,
    cca2: "NZ",
    region: "Oceania",
    city: "Auckland"
  },
  {
    iata: "CHC",
    lat: -43.4893989563,
    lon: 172.5319976807,
    cca2: "NZ",
    region: "Oceania",
    city: "Christchurch"
  },
  {
    iata: "LOS",
    lat: 6.5773701668,
    lon: 3.321160078,
    cca2: "NG",
    region: "Africa",
    city: "Lagos"
  },
  {
    iata: "OSL",
    lat: 60.193901062,
    lon: 11.100399971,
    cca2: "NO",
    region: "Europe",
    city: "Oslo"
  },
  {
    iata: "MCT",
    lat: 23.5932998657,
    lon: 58.2844009399,
    cca2: "OM",
    region: "Middle East",
    city: "Muscat"
  },
  {
    iata: "ISB",
    lat: 33.6166992188,
    lon: 73.0991973877,
    cca2: "PK",
    region: "Asia Pacific",
    city: "Islamabad"
  },
  {
    iata: "KHI",
    lat: 24.9064998627,
    lon: 67.1607971191,
    cca2: "PK",
    region: "Asia Pacific",
    city: "Karachi"
  },
  {
    iata: "LHE",
    lat: 31.5216007233,
    lon: 74.4036026001,
    cca2: "PK",
    region: "Asia Pacific",
    city: "Lahore"
  },
  {
    iata: "ZDM",
    lat: 32.2719,
    lon: 35.0194,
    cca2: "PS",
    region: "Middle East",
    city: "Ramallah"
  },
  {
    iata: "PTY",
    lat: 9.0713596344,
    lon: -79.3834991455,
    cca2: "PA",
    region: "South America",
    city: "Panama City"
  },
  {
    iata: "ASU",
    lat: -25.2399997711,
    lon: -57.5200004578,
    cca2: "PY",
    region: "South America",
    city: "Asunción"
  },
  {
    iata: "LIM",
    lat: -12.021900177,
    lon: -77.1143035889,
    cca2: "PE",
    region: "South America",
    city: "Lima"
  },
  {
    iata: "CGY",
    lat: 8.4156198502,
    lon: 124.611000061,
    cca2: "PH",
    region: "Asia Pacific",
    city: "Cagayan de Oro"
  },
  {
    iata: "CEB",
    lat: 10.3074998856,
    lon: 123.978996277,
    cca2: "PH",
    region: "Asia Pacific",
    city: "Cebu"
  },
  {
    iata: "MNL",
    lat: 14.508600235,
    lon: 121.019996643,
    cca2: "PH",
    region: "Asia Pacific",
    city: "Manila"
  },
  {
    iata: "WAW",
    lat: 52.1656990051,
    lon: 20.9671001434,
    cca2: "PL",
    region: "Europe",
    city: "Warsaw"
  },
  {
    iata: "LIS",
    lat: 38.7812995911,
    lon: -9.1359195709,
    cca2: "PT",
    region: "Europe",
    city: "Lisbon"
  },
  {
    iata: "DOH",
    lat: 25.2605946,
    lon: 51.6137665,
    cca2: "QA",
    region: "Middle East",
    city: "Doha"
  },
  {
    iata: "RUN",
    lat: -20.8871002197,
    lon: 55.5102996826,
    cca2: "RE",
    region: "Africa",
    city: "Saint-Denis"
  },
  {
    iata: "OTP",
    lat: 44.5722007751,
    lon: 26.1021995544,
    cca2: "RO",
    region: "Europe",
    city: "Bucharest"
  },
  {
    iata: "KHV",
    lat: 48.5279998779,
    lon: 135.18800354,
    cca2: "RU",
    region: "Asia Pacific",
    city: "Khabarovsk"
  },
  {
    iata: "KJA",
    lat: 56.0153,
    lon: 92.8932,
    cca2: "RU",
    region: "Asia Pacific",
    city: "Krasnoyarsk"
  },
  {
    iata: "DME",
    lat: 55.4087982178,
    lon: 37.9062995911,
    cca2: "RU",
    region: "Europe",
    city: "Moscow"
  },
  {
    iata: "LED",
    lat: 59.8003005981,
    lon: 30.2625007629,
    cca2: "RU",
    region: "Europe",
    city: "Saint Petersburg"
  },
  {
    iata: "KLD",
    lat: 56.8587,
    lon: 35.9176,
    cca2: "RU",
    region: "Europe",
    city: "Tver"
  },
  {
    iata: "SVX",
    lat: 56.8431,
    lon: 60.6454,
    cca2: "RU",
    region: "Asia Pacific",
    city: "Yekaterinburg"
  },
  {
    iata: "KGL",
    lat: -1.9686299563,
    lon: 30.1394996643,
    cca2: "RW",
    region: "Africa",
    city: "Kigali"
  },
  {
    iata: "DMM",
    lat: 26.471200943,
    lon: 49.7979011536,
    cca2: "SA",
    region: "Middle East",
    city: "Dammam"
  },
  {
    iata: "JED",
    lat: 21.679599762,
    lon: 39.15650177,
    cca2: "SA",
    region: "Middle East",
    city: "Jeddah"
  },
  {
    iata: "RUH",
    lat: 24.9575996399,
    lon: 46.6987991333,
    cca2: "SA",
    region: "Middle East",
    city: "Riyadh"
  },
  {
    iata: "DKR",
    lat: 14.7412099,
    lon: -17.4889771,
    cca2: "SN",
    region: "Africa",
    city: "Dakar"
  },
  {
    iata: "BEG",
    lat: 44.8184013367,
    lon: 20.3090991974,
    cca2: "RS",
    region: "Europe",
    city: "Belgrade"
  },
  {
    iata: "SIN",
    lat: 1.3501900434,
    lon: 103.994003296,
    cca2: "SG",
    region: "Asia Pacific",
    city: "Singapore"
  },
  {
    iata: "BTS",
    lat: 48.1486,
    lon: 17.1077,
    cca2: "SK",
    region: "Europe",
    city: "Bratislava"
  },
  {
    iata: "CPT",
    lat: -33.9648017883,
    lon: 18.6016998291,
    cca2: "ZA",
    region: "Africa",
    city: "Cape Town"
  },
  {
    iata: "DUR",
    lat: -29.6144444444,
    lon: 31.1197222222,
    cca2: "ZA",
    region: "Africa",
    city: "Durban"
  },
  {
    iata: "JNB",
    lat: -26.133333,
    lon: 28.25,
    cca2: "ZA",
    region: "Africa",
    city: "Johannesburg"
  },
  {
    iata: "BCN",
    lat: 41.2971000671,
    lon: 2.0784599781,
    cca2: "ES",
    region: "Europe",
    city: "Barcelona"
  },
  {
    iata: "MAD",
    lat: 40.4936,
    lon: -3.56676,
    cca2: "ES",
    region: "Europe",
    city: "Madrid"
  },
  {
    iata: "CMB",
    lat: 7.1807599068,
    lon: 79.8841018677,
    cca2: "LK",
    region: "Asia Pacific",
    city: "Colombo"
  },
  {
    iata: "PBM",
    lat: 5.452831,
    lon: -55.187783,
    cca2: "SR",
    region: "South America",
    city: "Paramaribo"
  },
  {
    iata: "GOT",
    lat: 57.6627998352,
    lon: 12.279800415,
    cca2: "SE",
    region: "Europe",
    city: "Gothenburg"
  },
  {
    iata: "ARN",
    lat: 59.6519012451,
    lon: 17.9186000824,
    cca2: "SE",
    region: "Europe",
    city: "Stockholm"
  },
  {
    iata: "GVA",
    lat: 46.2380981445,
    lon: 6.1089501381,
    cca2: "CH",
    region: "Europe",
    city: "Geneva"
  },
  {
    iata: "ZRH",
    lat: 47.4646987915,
    lon: 8.5491695404,
    cca2: "CH",
    region: "Europe",
    city: "Zurich"
  },
  {
    iata: "TPE",
    lat: 25.0776996613,
    lon: 121.233001709,
    cca2: "TW",
    region: "Asia Pacific",
    city: "Taipei"
  },
  {
    iata: "DAR",
    lat: -6.8781099319,
    lon: 39.2025985718,
    cca2: "TZ",
    region: "Africa",
    city: "Dar es Salaam"
  },
  {
    iata: "BKK",
    lat: 13.6810998917,
    lon: 100.747001648,
    cca2: "TH",
    region: "Asia Pacific",
    city: "Bangkok"
  },
  {
    iata: "CNX",
    lat: 18.7667999268,
    lon: 98.962600708,
    cca2: "TH",
    region: "Asia Pacific",
    city: "Chiang Mai"
  },
  {
    iata: "URT",
    lat: 9.1325998306,
    lon: 99.135597229,
    cca2: "TH",
    region: "Asia Pacific",
    city: "Surat Thani"
  },
  {
    iata: "TUN",
    lat: 36.8510017395,
    lon: 10.2271995544,
    cca2: "TN",
    region: "Africa",
    city: "Tunis"
  },
  {
    iata: "IST",
    lat: 40.9768981934,
    lon: 28.8145999908,
    cca2: "TR",
    region: "Europe",
    city: "Istanbul"
  },
  {
    iata: "KBP",
    lat: 50.3450012207,
    lon: 30.8946990967,
    cca2: "UA",
    region: "Europe",
    city: "Kyiv"
  },
  {
    iata: "DXB",
    lat: 25.2527999878,
    lon: 55.3643989563,
    cca2: "AE",
    region: "Middle East",
    city: "Dubai"
  },
  {
    iata: "EDI",
    lat: 55.9500007629,
    lon: -3.3724999428,
    cca2: "GB",
    region: "Europe",
    city: "Edinburgh"
  },
  {
    iata: "LHR",
    lat: 51.4706001282,
    lon: -0.4619410038,
    cca2: "GB",
    region: "Europe",
    city: "London"
  },
  {
    iata: "MAN",
    lat: 53.3536987305,
    lon: -2.2749500275,
    cca2: "GB",
    region: "Europe",
    city: "Manchester"
  },
  {
    iata: "MGM",
    lat: 32.30059814,
    lon: -86.39399719,
    cca2: "US",
    region: "North America",
    city: "Montgomery"
  },
  {
    iata: "PHX",
    lat: 33.434299469,
    lon: -112.012001038,
    cca2: "US",
    region: "North America",
    city: "Phoenix"
  },
  {
    iata: "LAX",
    lat: 33.94250107,
    lon: -118.4079971,
    cca2: "US",
    region: "North America",
    city: "Los Angeles"
  },
  {
    iata: "SMF",
    lat: 38.695400238,
    lon: -121.591003418,
    cca2: "US",
    region: "North America",
    city: "Sacramento"
  },
  {
    iata: "SAN",
    lat: 32.7336006165,
    lon: -117.190002441,
    cca2: "US",
    region: "North America",
    city: "San Diego"
  },
  {
    iata: "SFO",
    lat: 37.6189994812,
    lon: -122.375,
    cca2: "US",
    region: "North America",
    city: "San Francisco"
  },
  {
    iata: "SJC",
    lat: 37.3625984192,
    lon: -121.929000855,
    cca2: "US",
    region: "North America",
    city: "San Jose"
  },
  {
    iata: "DEN",
    lat: 39.8616981506,
    lon: -104.672996521,
    cca2: "US",
    region: "North America",
    city: "Denver"
  },
  {
    iata: "JAX",
    lat: 30.4941005707,
    lon: -81.6878967285,
    cca2: "US",
    region: "North America",
    city: "Jacksonville"
  },
  {
    iata: "MIA",
    lat: 25.7931995392,
    lon: -80.2906036377,
    cca2: "US",
    region: "North America",
    city: "Miami"
  },
  {
    iata: "TLH",
    lat: 30.3964996338,
    lon: -84.3503036499,
    cca2: "US",
    region: "North America",
    city: "Tallahassee"
  },
  {
    iata: "TPA",
    lat: 27.9755001068,
    lon: -82.533203125,
    cca2: "US",
    region: "North America",
    city: "Tampa"
  },
  {
    iata: "ATL",
    lat: 33.6366996765,
    lon: -84.4281005859,
    cca2: "US",
    region: "North America",
    city: "Atlanta"
  },
  {
    iata: "HNL",
    lat: 21.3187007904,
    lon: -157.9219970703,
    cca2: "US",
    region: "North America",
    city: "Honolulu"
  },
  {
    iata: "ORD",
    lat: 41.97859955,
    lon: -87.90480042,
    cca2: "US",
    region: "North America",
    city: "Chicago"
  },
  {
    iata: "IND",
    lat: 39.717300415,
    lon: -86.2944030762,
    cca2: "US",
    region: "North America",
    city: "Indianapolis"
  },
  {
    iata: "BOS",
    lat: 42.36429977,
    lon: -71.00520325,
    cca2: "US",
    region: "North America",
    city: "Boston"
  },
  {
    iata: "DTW",
    lat: 42.2123985291,
    lon: -83.3534011841,
    cca2: "US",
    region: "North America",
    city: "Detroit"
  },
  {
    iata: "MSP",
    lat: 44.8819999695,
    lon: -93.2218017578,
    cca2: "US",
    region: "North America",
    city: "Minneapolis"
  },
  {
    iata: "MCI",
    lat: 39.2975997925,
    lon: -94.7138977051,
    cca2: "US",
    region: "North America",
    city: "Kansas City"
  },
  {
    iata: "STL",
    lat: 38.7486991882,
    lon: -90.3700027466,
    cca2: "US",
    region: "North America",
    city: "St. Louis"
  },
  {
    iata: "OMA",
    lat: 41.3031997681,
    lon: -95.8940963745,
    cca2: "US",
    region: "North America",
    city: "Omaha"
  },
  {
    iata: "LAS",
    lat: 36.08010101,
    lon: -115.1520004,
    cca2: "US",
    region: "North America",
    city: "Las Vegas"
  },
  {
    iata: "EWR",
    lat: 40.6925010681,
    lon: -74.1687011719,
    cca2: "US",
    region: "North America",
    city: "Newark"
  },
  {
    iata: "BUF",
    lat: 42.94049835,
    lon: -78.73220062,
    cca2: "US",
    region: "North America",
    city: "Buffalo"
  },
  {
    iata: "CLT",
    lat: 35.2140007019,
    lon: -80.9430999756,
    cca2: "US",
    region: "North America",
    city: "Charlotte"
  },
  {
    iata: "CMH",
    lat: 39.9980010986,
    lon: -82.8918991089,
    cca2: "US",
    region: "North America",
    city: "Columbus"
  },
  {
    iata: "PDX",
    lat: 45.58869934,
    lon: -122.5979996,
    cca2: "US",
    region: "North America",
    city: "Portland"
  },
  {
    iata: "PHL",
    lat: 39.8718986511,
    lon: -75.2410964966,
    cca2: "US",
    region: "North America",
    city: "Philadelphia"
  },
  {
    iata: "PIT",
    lat: 40.49150085,
    lon: -80.23290253,
    cca2: "US",
    region: "North America",
    city: "Pittsburgh"
  },
  {
    iata: "MEM",
    lat: 35.0424003601,
    lon: -89.9766998291,
    cca2: "US",
    region: "North America",
    city: "Memphis"
  },
  {
    iata: "DFW",
    lat: 32.8968009949,
    lon: -97.0380020142,
    cca2: "US",
    region: "North America",
    city: "Dallas"
  },
  {
    iata: "IAH",
    lat: 29.9843997955,
    lon: -95.3414001465,
    cca2: "US",
    region: "North America",
    city: "Houston"
  },
  {
    iata: "MFE",
    lat: 26.17580032,
    lon: -98.23860168,
    cca2: "US",
    region: "North America",
    city: "McAllen"
  },
  {
    iata: "SLC",
    lat: 40.7883987427,
    lon: -111.977996826,
    cca2: "US",
    region: "North America",
    city: "Salt Lake City"
  },
  {
    iata: "IAD",
    lat: 38.94449997,
    lon: -77.45580292,
    cca2: "US",
    region: "North America",
    city: "Ashburn"
  },
  {
    iata: "ORF",
    lat: 36.8945999146,
    lon: -76.2012023926,
    cca2: "US",
    region: "North America",
    city: "Norfolk"
  },
  {
    iata: "RIC",
    lat: 37.5051994324,
    lon: -77.3197021484,
    cca2: "US",
    region: "North America",
    city: "Richmond"
  },
  {
    iata: "SEA",
    lat: 47.4490013123,
    lon: -122.308998108,
    cca2: "US",
    region: "North America",
    city: "Seattle"
  },
  {
    iata: "TAS",
    lat: 41.257900238,
    lon: 69.2811965942,
    cca2: "UZ",
    region: "Asia Pacific",
    city: "Tashkent"
  },
  {
    iata: "HAN",
    lat: 21.221200943,
    lon: 105.806999206,
    cca2: "VN",
    region: "Asia Pacific",
    city: "Hanoi"
  },
  {
    iata: "SGN",
    lat: 10.8187999725,
    lon: 106.652000427,
    cca2: "VN",
    region: "Asia Pacific",
    city: "Ho Chi Minh City"
  },
  {
    iata: "HRE",
    lat: -17.9318008423,
    lon: 31.0928001404,
    cca2: "ZW",
    region: "Africa",
    city: "Harare"
  }
]

const flags = {
  "AF": "🇦🇫",
  "AO": "🇦🇴",
  "AL": "🇦🇱",
  "AD": "🇦🇩",
  "AE": "🇦🇪",
  "AR": "🇦🇷",
  "AM": "🇦🇲",
  "AG": "🇦🇬",
  "AU": "🇦🇺",
  "AT": "🇦🇹",
  "AZ": "🇦🇿",
  "BI": "🇧🇮",
  "BE": "🇧🇪",
  "BJ": "🇧🇯",
  "BF": "🇧🇫",
  "BD": "🇧🇩",
  "BG": "🇧🇬",
  "BH": "🇧🇭",
  "BS": "🇧🇸",
  "BA": "🇧🇦",
  "BY": "🇧🇾",
  "BZ": "🇧🇿",
  "BO": "🇧🇴",
  "BR": "🇧🇷",
  "BB": "🇧🇧",
  "BN": "🇧🇳",
  "BT": "🇧🇹",
  "BW": "🇧🇼",
  "CF": "🇨🇫",
  "CA": "🇨🇦",
  "CH": "🇨🇭",
  "CL": "🇨🇱",
  "CN": "🇨🇳",
  "CI": "🇨🇮",
  "CM": "🇨🇲",
  "CD": "🇨🇩",
  "CG": "🇨🇬",
  "CO": "🇨🇴",
  "KM": "🇰🇲",
  "CV": "🇨🇻",
  "CR": "🇨🇷",
  "CU": "🇨🇺",
  "CY": "🇨🇾",
  "CZ": "🇨🇿",
  "DE": "🇩🇪",
  "DJ": "🇩🇯",
  "DM": "🇩🇲",
  "DK": "🇩🇰",
  "DO": "🇩🇴",
  "DZ": "🇩🇿",
  "EC": "🇪🇨",
  "EG": "🇪🇬",
  "ER": "🇪🇷",
  "ES": "🇪🇸",
  "EE": "🇪🇪",
  "ET": "🇪🇹",
  "FI": "🇫🇮",
  "FJ": "🇫🇯",
  "FR": "🇫🇷",
  "FM": "🇫🇲",
  "GA": "🇬🇦",
  "GB": "🇬🇧",
  "GE": "🇬🇪",
  "GH": "🇬🇭",
  "GN": "🇬🇳",
  "GM": "🇬🇲",
  "GW": "🇬🇼",
  "GQ": "🇬🇶",
  "GR": "🇬🇷",
  "GD": "🇬🇩",
  "GT": "🇬🇹",
  "GY": "🇬🇾",
  "HN": "🇭🇳",
  "HR": "🇭🇷",
  "HT": "🇭🇹",
  "HU": "🇭🇺",
  "ID": "🇮🇩",
  "IN": "🇮🇳",
  "IE": "🇮🇪",
  "IR": "🇮🇷",
  "IQ": "🇮🇶",
  "IS": "🇮🇸",
  "IL": "🇮🇱",
  "IT": "🇮🇹",
  "JM": "🇯🇲",
  "JO": "🇯🇴",
  "JP": "🇯🇵",
  "KZ": "🇰🇿",
  "KE": "🇰🇪",
  "KG": "🇰🇬",
  "KH": "🇰🇭",
  "KI": "🇰🇮",
  "KN": "🇰🇳",
  "KR": "🇰🇷",
  "KW": "🇰🇼",
  "LA": "🇱🇦",
  "LB": "🇱🇧",
  "LR": "🇱🇷",
  "LY": "🇱🇾",
  "LC": "🇱🇨",
  "LI": "🇱🇮",
  "LK": "🇱🇰",
  "LS": "🇱🇸",
  "LT": "🇱🇹",
  "LU": "🇱🇺",
  "LV": "🇱🇻",
  "MA": "🇲🇦",
  "MC": "🇲🇨",
  "MD": "🇲🇩",
  "MG": "🇲🇬",
  "MV": "🇲🇻",
  "MX": "🇲🇽",
  "MH": "🇲🇭",
  "MK": "🇲🇰",
  "ML": "🇲🇱",
  "MT": "🇲🇹",
  "MM": "🇲🇲",
  "ME": "🇲🇪",
  "MN": "🇲🇳",
  "MZ": "🇲🇿",
  "MR": "🇲🇷",
  "MU": "🇲🇺",
  "MW": "🇲🇼",
  "MY": "🇲🇾",
  "NA": "🇳🇦",
  "NE": "🇳🇪",
  "NG": "🇳🇬",
  "NI": "🇳🇮",
  "NL": "🇳🇱",
  "NO": "🇳🇴",
  "NP": "🇳🇵",
  "NR": "🇳🇷",
  "NZ": "🇳🇿",
  "OM": "🇴🇲",
  "PK": "🇵🇰",
  "PA": "🇵🇦",
  "PE": "🇵🇪",
  "PH": "🇵🇭",
  "PW": "🇵🇼",
  "PG": "🇵🇬",
  "PL": "🇵🇱",
  "KP": "🇰🇵",
  "PT": "🇵🇹",
  "PY": "🇵🇾",
  "QA": "🇶🇦",
  "RO": "🇷🇴",
  "RU": "🇷🇺",
  "RW": "🇷🇼",
  "SA": "🇸🇦",
  "SD": "🇸🇩",
  "SN": "🇸🇳",
  "SG": "🇸🇬",
  "SB": "🇸🇧",
  "SL": "🇸🇱",
  "SV": "🇸🇻",
  "SM": "🇸🇲",
  "SO": "🇸🇴",
  "RS": "🇷🇸",
  "SS": "🇸🇸",
  "ST": "🇸🇹",
  "SR": "🇸🇷",
  "SK": "🇸🇰",
  "SI": "🇸🇮",
  "SE": "🇸🇪",
  "SZ": "🇸🇿",
  "SC": "🇸🇨",
  "SY": "🇸🇾",
  "TD": "🇹🇩",
  "TG": "🇹🇬",
  "TH": "🇹🇭",
  "TJ": "🇹🇯",
  "TM": "🇹🇲",
  "TL": "🇹🇱",
  "TO": "🇹🇴",
  "TT": "🇹🇹",
  "TN": "🇹🇳",
  "TR": "🇹🇷",
  "TV": "🇹🇻",
  "TZ": "🇹🇿",
  "UG": "🇺🇬",
  "UA": "🇺🇦",
  "UY": "🇺🇾",
  "US": "🇺🇸",
  "UZ": "🇺🇿",
  "VA": "🇻🇦",
  "VC": "🇻🇨",
  "VE": "🇻🇪",
  "VN": "🇻🇳",
  "VU": "🇻🇺",
  "WS": "🇼🇸",
  "YE": "🇾🇪",
  "ZA": "🇿🇦",
  "ZM": "🇿🇲",
  "ZW": "🇿🇼"
}

const countries = [
  { "name": "Afghanistan", "cca2": "AF", "flag": "🇦🇫", "code": "93" },
  { "name": "Angola", "cca2": "AO", "flag": "🇦🇴", "code": "244" },
  { "name": "Albania", "cca2": "AL", "flag": "🇦🇱", "code": "355" },
  { "name": "Andorra", "cca2": "AD", "flag": "🇦🇩", "code": "376" },
  { "name": "United Arab Emirates", "cca2": "AE", "flag": "🇦🇪", "code": "971" },
  { "name": "Argentina", "cca2": "AR", "flag": "🇦🇷", "code": "54" },
  { "name": "Armenia", "cca2": "AM", "flag": "🇦🇲", "code": "374" },
  { "name": "Antigua and Barbuda", "cca2": "AG", "flag": "🇦🇬", "code": "1268" },
  { "name": "Australia", "cca2": "AU", "flag": "🇦🇺", "code": "61" },
  { "name": "Austria", "cca2": "AT", "flag": "🇦🇹", "code": "43" },
  { "name": "Azerbaijan", "cca2": "AZ", "flag": "🇦🇿", "code": "994" },
  { "name": "Burundi", "cca2": "BI", "flag": "🇧🇮", "code": "257" },
  { "name": "Belgium", "cca2": "BE", "flag": "🇧🇪", "code": "32" },
  { "name": "Benin", "cca2": "BJ", "flag": "🇧🇯", "code": "229" },
  { "name": "Burkina Faso", "cca2": "BF", "flag": "🇧🇫", "code": "226" },
  { "name": "Bangladesh", "cca2": "BD", "flag": "🇧🇩", "code": "880" },
  { "name": "Bulgaria", "cca2": "BG", "flag": "🇧🇬", "code": "359" },
  { "name": "Bahrain", "cca2": "BH", "flag": "🇧🇭", "code": "973" },
  { "name": "Bahamas", "cca2": "BS", "flag": "🇧🇸", "code": "1242" },
  { "name": "Bosnia and Herzegovina", "cca2": "BA", "flag": "🇧🇦", "code": "387" },
  { "name": "Belarus", "cca2": "BY", "flag": "🇧🇾", "code": "375" },
  { "name": "Belize", "cca2": "BZ", "flag": "🇧🇿", "code": "501" },
  { "name": "Bolivia", "cca2": "BO", "flag": "🇧🇴", "code": "591" },
  { "name": "Brazil", "cca2": "BR", "flag": "🇧🇷", "code": "55" },
  { "name": "Barbados", "cca2": "BB", "flag": "🇧🇧", "code": "1246" },
  { "name": "Brunei", "cca2": "BN", "flag": "🇧🇳", "code": "673" },
  { "name": "Bhutan", "cca2": "BT", "flag": "🇧🇹", "code": "975" },
  { "name": "Botswana", "cca2": "BW", "flag": "🇧🇼", "code": "267" },
  { "name": "Central African Republic", "cca2": "CF", "flag": "🇨🇫", "code": "236" },
  { "name": "Canada", "cca2": "CA", "flag": "🇨🇦", "code": "1" },
  { "name": "Switzerland", "cca2": "CH", "flag": "🇨🇭", "code": "41" },
  { "name": "Chile", "cca2": "CL", "flag": "🇨🇱", "code": "56" },
  { "name": "China", "cca2": "CN", "flag": "🇨🇳", "code": "86" },
  { "name": "Ivory Coast", "cca2": "CI", "flag": "🇨🇮", "code": "225" },
  { "name": "Cameroon", "cca2": "CM", "flag": "🇨🇲", "code": "237" },
  { "name": "DR Congo", "cca2": "CD", "flag": "🇨🇩", "code": "243" },
  { "name": "Republic of the Congo", "cca2": "CG", "flag": "🇨🇬", "code": "242" },
  { "name": "Colombia", "cca2": "CO", "flag": "🇨🇴", "code": "57" },
  { "name": "Comoros", "cca2": "KM", "flag": "🇰🇲", "code": "269" },
  { "name": "Cape Verde", "cca2": "CV", "flag": "🇨🇻", "code": "238" },
  { "name": "Costa Rica", "cca2": "CR", "flag": "🇨🇷", "code": "506" },
  { "name": "Cuba", "cca2": "CU", "flag": "🇨🇺", "code": "53" },
  { "name": "Cyprus", "cca2": "CY", "flag": "🇨🇾", "code": "357" },
  { "name": "Czechia", "cca2": "CZ", "flag": "🇨🇿", "code": "420" },
  { "name": "Germany", "cca2": "DE", "flag": "🇩🇪", "code": "49" },
  { "name": "Djibouti", "cca2": "DJ", "flag": "🇩🇯", "code": "253" },
  { "name": "Dominica", "cca2": "DM", "flag": "🇩🇲", "code": "1767" },
  { "name": "Denmark", "cca2": "DK", "flag": "🇩🇰", "code": "45" },
  { "name": "Dominican Republic", "cca2": "DO", "flag": "🇩🇴", "code": "1809" },
  { "name": "Algeria", "cca2": "DZ", "flag": "🇩🇿", "code": "213" },
  { "name": "Ecuador", "cca2": "EC", "flag": "🇪🇨", "code": "593" },
  { "name": "Egypt", "cca2": "EG", "flag": "🇪🇬", "code": "20" },
  { "name": "Eritrea", "cca2": "ER", "flag": "🇪🇷", "code": "291" },
  { "name": "Spain", "cca2": "ES", "flag": "🇪🇸", "code": "34" },
  { "name": "Estonia", "cca2": "EE", "flag": "🇪🇪", "code": "372" },
  { "name": "Ethiopia", "cca2": "ET", "flag": "🇪🇹", "code": "251" },
  { "name": "Finland", "cca2": "FI", "flag": "🇫🇮", "code": "358" },
  { "name": "Fiji", "cca2": "FJ", "flag": "🇫🇯", "code": "679" },
  { "name": "France", "cca2": "FR", "flag": "🇫🇷", "code": "33" },
  { "name": "Micronesia", "cca2": "FM", "flag": "🇫🇲", "code": "691" },
  { "name": "Gabon", "cca2": "GA", "flag": "🇬🇦", "code": "241" },
  { "name": "United Kingdom", "cca2": "GB", "flag": "🇬🇧", "code": "44" },
  { "name": "Georgia", "cca2": "GE", "flag": "🇬🇪", "code": "995" },
  { "name": "Ghana", "cca2": "GH", "flag": "🇬🇭", "code": "233" },
  { "name": "Guinea", "cca2": "GN", "flag": "🇬🇳", "code": "224" },
  { "name": "Gambia", "cca2": "GM", "flag": "🇬🇲", "code": "220" },
  { "name": "Guinea-Bissau", "cca2": "GW", "flag": "🇬🇼", "code": "245" },
  { "name": "Equatorial Guinea", "cca2": "GQ", "flag": "🇬🇶", "code": "240" },
  { "name": "Greece", "cca2": "GR", "flag": "🇬🇷", "code": "30" },
  { "name": "Grenada", "cca2": "GD", "flag": "🇬🇩", "code": "1473" },
  { "name": "Guatemala", "cca2": "GT", "flag": "🇬🇹", "code": "502" },
  { "name": "Guyana", "cca2": "GY", "flag": "🇬🇾", "code": "592" },
  { "name": "Honduras", "cca2": "HN", "flag": "🇭🇳", "code": "504" },
  { "name": "Croatia", "cca2": "HR", "flag": "🇭🇷", "code": "385" },
  { "name": "Haiti", "cca2": "HT", "flag": "🇭🇹", "code": "509" },
  { "name": "Hungary", "cca2": "HU", "flag": "🇭🇺", "code": "36" },
  { "name": "Indonesia", "cca2": "ID", "flag": "🇮🇩", "code": "62" },
  { "name": "India", "cca2": "IN", "flag": "🇮🇳", "code": "91" },
  { "name": "Ireland", "cca2": "IE", "flag": "🇮🇪", "code": "353" },
  { "name": "Iran", "cca2": "IR", "flag": "🇮🇷", "code": "98" },
  { "name": "Iraq", "cca2": "IQ", "flag": "🇮🇶", "code": "964" },
  { "name": "Iceland", "cca2": "IS", "flag": "🇮🇸", "code": "354" },
  { "name": "Israel", "cca2": "IL", "flag": "🇮🇱", "code": "972" },
  { "name": "Italy", "cca2": "IT", "flag": "🇮🇹", "code": "39" },
  { "name": "Jamaica", "cca2": "JM", "flag": "🇯🇲", "code": "1876" },
  { "name": "Jordan", "cca2": "JO", "flag": "🇯🇴", "code": "962" },
  { "name": "Japan", "cca2": "JP", "flag": "🇯🇵", "code": "81" },
  { "name": "Kazakhstan", "cca2": "KZ", "flag": "🇰🇿", "code": "76" },
  { "name": "Kenya", "cca2": "KE", "flag": "🇰🇪", "code": "254" },
  { "name": "Kyrgyzstan", "cca2": "KG", "flag": "🇰🇬", "code": "996" },
  { "name": "Cambodia", "cca2": "KH", "flag": "🇰🇭", "code": "855" },
  { "name": "Kiribati", "cca2": "KI", "flag": "🇰🇮", "code": "686" },
  { "name": "Saint Kitts and Nevis", "cca2": "KN", "flag": "🇰🇳", "code": "1869" },
  { "name": "South Korea", "cca2": "KR", "flag": "🇰🇷", "code": "82" },
  { "name": "Kuwait", "cca2": "KW", "flag": "🇰🇼", "code": "965" },
  { "name": "Laos", "cca2": "LA", "flag": "🇱🇦", "code": "856" },
  { "name": "Lebanon", "cca2": "LB", "flag": "🇱🇧", "code": "961" },
  { "name": "Liberia", "cca2": "LR", "flag": "🇱🇷", "code": "231" },
  { "name": "Libya", "cca2": "LY", "flag": "🇱🇾", "code": "218" },
  { "name": "Saint Lucia", "cca2": "LC", "flag": "🇱🇨", "code": "1758" },
  { "name": "Liechtenstein", "cca2": "LI", "flag": "🇱🇮", "code": "423" },
  { "name": "Sri Lanka", "cca2": "LK", "flag": "🇱🇰", "code": "94" },
  { "name": "Lesotho", "cca2": "LS", "flag": "🇱🇸", "code": "266" },
  { "name": "Lithuania", "cca2": "LT", "flag": "🇱🇹", "code": "370" },
  { "name": "Luxembourg", "cca2": "LU", "flag": "🇱🇺", "code": "352" },
  { "name": "Latvia", "cca2": "LV", "flag": "🇱🇻", "code": "371" },
  { "name": "Morocco", "cca2": "MA", "flag": "🇲🇦", "code": "212" },
  { "name": "Monaco", "cca2": "MC", "flag": "🇲🇨", "code": "377" },
  { "name": "Moldova", "cca2": "MD", "flag": "🇲🇩", "code": "373" },
  { "name": "Madagascar", "cca2": "MG", "flag": "🇲🇬", "code": "261" },
  { "name": "Maldives", "cca2": "MV", "flag": "🇲🇻", "code": "960" },
  { "name": "Mexico", "cca2": "MX", "flag": "🇲🇽", "code": "52" },
  { "name": "Marshall Islands", "cca2": "MH", "flag": "🇲🇭", "code": "692" },
  { "name": "Macedonia", "cca2": "MK", "flag": "🇲🇰", "code": "389" },
  { "name": "Mali", "cca2": "ML", "flag": "🇲🇱", "code": "223" },
  { "name": "Malta", "cca2": "MT", "flag": "🇲🇹", "code": "356" },
  { "name": "Myanmar", "cca2": "MM", "flag": "🇲🇲", "code": "95" },
  { "name": "Montenegro", "cca2": "ME", "flag": "🇲🇪", "code": "382" },
  { "name": "Mongolia", "cca2": "MN", "flag": "🇲🇳", "code": "976" },
  { "name": "Mozambique", "cca2": "MZ", "flag": "🇲🇿", "code": "258" },
  { "name": "Mauritania", "cca2": "MR", "flag": "🇲🇷", "code": "222" },
  { "name": "Mauritius", "cca2": "MU", "flag": "🇲🇺", "code": "230" },
  { "name": "Malawi", "cca2": "MW", "flag": "🇲🇼", "code": "265" },
  { "name": "Malaysia", "cca2": "MY", "flag": "🇲🇾", "code": "60" },
  { "name": "Namibia", "cca2": "NA", "flag": "🇳🇦", "code": "264" },
  { "name": "Niger", "cca2": "NE", "flag": "🇳🇪", "code": "227" },
  { "name": "Nigeria", "cca2": "NG", "flag": "🇳🇬", "code": "234" },
  { "name": "Nicaragua", "cca2": "NI", "flag": "🇳🇮", "code": "505" },
  { "name": "Netherlands", "cca2": "NL", "flag": "🇳🇱", "code": "31" },
  { "name": "Norway", "cca2": "NO", "flag": "🇳🇴", "code": "47" },
  { "name": "Nepal", "cca2": "NP", "flag": "🇳🇵", "code": "977" },
  { "name": "Nauru", "cca2": "NR", "flag": "🇳🇷", "code": "674" },
  { "name": "New Zealand", "cca2": "NZ", "flag": "🇳🇿", "code": "64" },
  { "name": "Oman", "cca2": "OM", "flag": "🇴🇲", "code": "968" },
  { "name": "Pakistan", "cca2": "PK", "flag": "🇵🇰", "code": "92" },
  { "name": "Panama", "cca2": "PA", "flag": "🇵🇦", "code": "507" },
  { "name": "Peru", "cca2": "PE", "flag": "🇵🇪", "code": "51" },
  { "name": "Philippines", "cca2": "PH", "flag": "🇵🇭", "code": "63" },
  { "name": "Palau", "cca2": "PW", "flag": "🇵🇼", "code": "680" },
  { "name": "Papua New Guinea", "cca2": "PG", "flag": "🇵🇬", "code": "675" },
  { "name": "Poland", "cca2": "PL", "flag": "🇵🇱", "code": "48" },
  { "name": "North Korea", "cca2": "KP", "flag": "🇰🇵", "code": "850" },
  { "name": "Portugal", "cca2": "PT", "flag": "🇵🇹", "code": "351" },
  { "name": "Paraguay", "cca2": "PY", "flag": "🇵🇾", "code": "595" },
  { "name": "Qatar", "cca2": "QA", "flag": "🇶🇦", "code": "974" },
  { "name": "Romania", "cca2": "RO", "flag": "🇷🇴", "code": "40" },
  { "name": "Russia", "cca2": "RU", "flag": "🇷🇺", "code": "7" },
  { "name": "Rwanda", "cca2": "RW", "flag": "🇷🇼", "code": "250" },
  { "name": "Saudi Arabia", "cca2": "SA", "flag": "🇸🇦", "code": "966" },
  { "name": "Sudan", "cca2": "SD", "flag": "🇸🇩", "code": "249" },
  { "name": "Senegal", "cca2": "SN", "flag": "🇸🇳", "code": "221" },
  { "name": "Singapore", "cca2": "SG", "flag": "🇸🇬", "code": "65" },
  { "name": "Solomon Islands", "cca2": "SB", "flag": "🇸🇧", "code": "677" },
  { "name": "Sierra Leone", "cca2": "SL", "flag": "🇸🇱", "code": "232" },
  { "name": "El Salvador", "cca2": "SV", "flag": "🇸🇻", "code": "503" },
  { "name": "San Marino", "cca2": "SM", "flag": "🇸🇲", "code": "378" },
  { "name": "Somalia", "cca2": "SO", "flag": "🇸🇴", "code": "252" },
  { "name": "Serbia", "cca2": "RS", "flag": "🇷🇸", "code": "381" },
  { "name": "South Sudan", "cca2": "SS", "flag": "🇸🇸", "code": "211" },
  { "name": "São Tomé and Príncipe", "cca2": "ST", "flag": "🇸🇹", "code": "239" },
  { "name": "Suriname", "cca2": "SR", "flag": "🇸🇷", "code": "597" },
  { "name": "Slovakia", "cca2": "SK", "flag": "🇸🇰", "code": "421" },
  { "name": "Slovenia", "cca2": "SI", "flag": "🇸🇮", "code": "386" },
  { "name": "Sweden", "cca2": "SE", "flag": "🇸🇪", "code": "46" },
  { "name": "Swaziland", "cca2": "SZ", "flag": "🇸🇿", "code": "268" },
  { "name": "Seychelles", "cca2": "SC", "flag": "🇸🇨", "code": "248" },
  { "name": "Syria", "cca2": "SY", "flag": "🇸🇾", "code": "963" },
  { "name": "Chad", "cca2": "TD", "flag": "🇹🇩", "code": "235" },
  { "name": "Togo", "cca2": "TG", "flag": "🇹🇬", "code": "228" },
  { "name": "Thailand", "cca2": "TH", "flag": "🇹🇭", "code": "66" },
  { "name": "Tajikistan", "cca2": "TJ", "flag": "🇹🇯", "code": "992" },
  { "name": "Turkmenistan", "cca2": "TM", "flag": "🇹🇲", "code": "993" },
  { "name": "Timor-Leste", "cca2": "TL", "flag": "🇹🇱", "code": "670" },
  { "name": "Tonga", "cca2": "TO", "flag": "🇹🇴", "code": "676" },
  { "name": "Trinidad and Tobago", "cca2": "TT", "flag": "🇹🇹", "code": "1868" },
  { "name": "Tunisia", "cca2": "TN", "flag": "🇹🇳", "code": "216" },
  { "name": "Turkey", "cca2": "TR", "flag": "🇹🇷", "code": "90" },
  { "name": "Tuvalu", "cca2": "TV", "flag": "🇹🇻", "code": "688" },
  { "name": "Tanzania", "cca2": "TZ", "flag": "🇹🇿", "code": "255" },
  { "name": "Uganda", "cca2": "UG", "flag": "🇺🇬", "code": "256" },
  { "name": "Ukraine", "cca2": "UA", "flag": "🇺🇦", "code": "380" },
  { "name": "Uruguay", "cca2": "UY", "flag": "🇺🇾", "code": "598" },
  { "name": "United States", "cca2": "US", "flag": "🇺🇸", "code": "1" },
  { "name": "Uzbekistan", "cca2": "UZ", "flag": "🇺🇿", "code": "998" },
  { "name": "Vatican City", "cca2": "VA", "flag": "🇻🇦", "code": "3906698" },
  { "name": "Saint Vincent and the Grenadines", "cca2": "VC", "flag": "🇻🇨", "code": "1784" },
  { "name": "Venezuela", "cca2": "VE", "flag": "🇻🇪", "code": "58" },
  { "name": "Vietnam", "cca2": "VN", "flag": "🇻🇳", "code": "84" },
  { "name": "Vanuatu", "cca2": "VU", "flag": "🇻🇺", "code": "678" },
  { "name": "Samoa", "cca2": "WS", "flag": "🇼🇸", "code": "685" },
  { "name": "Yemen", "cca2": "YE", "flag": "🇾🇪", "code": "967" },
  { "name": "South Africa", "cca2": "ZA", "flag": "🇿🇦", "code": "27" },
  { "name": "Zambia", "cca2": "ZM", "flag": "🇿🇲", "code": "260" },
  { "name": "Zimbabwe", "cca2": "ZW", "flag": "🇿🇼", "code": "263" }
]

const metros = {
  "500": "Portland-Auburn",
  "501": "New York",
  "502": "Binghamton",
  "503": "Macon",
  "504": "Philadelphia",
  "505": "Detroit",
  "506": "Boston (Manchester)",
  "507": "Savannah",
  "508": "Pittsburgh",
  "509": "Ft. Wayne",
  "510": "Cleveland-Akron (Canton)",
  "511": "Washington, DC (Hagrstwn)",
  "512": "Baltimore",
  "513": "Flint-Saginaw-Bay City",
  "514": "Buffalo",
  "515": "Cincinnati",
  "516": "Erie",
  "517": "Charlotte",
  "518": "Greensboro-H.Point-W.Salem",
  "519": "Charleston, SC",
  "520": "Augusta-Aiken",
  "521": "Providence-New Bedford",
  "522": "Columbus, GA (Opelika, AL)",
  "523": "Burlington-Plattsburgh",
  "524": "Atlanta",
  "525": "Albany, GA",
  "526": "Utica",
  "527": "Indianapolis",
  "528": "Miami-Ft. Lauderdale",
  "529": "Louisville",
  "530": "Tallahassee-Thomasville",
  "531": "Tri-Cities, TN-VA",
  "532": "Albany-Schenectady-Troy",
  "533": "Hartford & New Haven",
  "534": "Orlando-Daytona Bch-Melbrn",
  "535": "Columbus, OH",
  "536": "Youngstown",
  "537": "Bangor",
  "538": "Rochester, NY",
  "539": "Tampa-St. Pete (Sarasota)",
  "540": "Traverse City-Cadillac",
  "541": "Lexington",
  "542": "Dayton",
  "543": "Springfield-Holyoke",
  "544": "Norfolk-Portsmth-Newpt Nws",
  "545": "Greenville-N.Bern-Washngtn",
  "546": "Columbia, SC",
  "547": "Toledo",
  "548": "West Palm Beach-Ft. Pierce",
  "549": "Watertown",
  "550": "Wilmington",
  "551": "Lansing",
  "552": "Presque Isle",
  "553": "Marquette",
  "554": "Wheeling-Steubenville",
  "555": "Syracuse",
  "556": "Richmond-Petersburg",
  "557": "Knoxville",
  "558": "Lima",
  "559": "Bluefield-Beckley-Oak Hill",
  "560": "Raleigh-Durham (Fayetvlle)",
  "561": "Jacksonville",
  "563": "Grand Rapids-Kalmzoo-B.Crk",
  "564": "Charleston-Huntington",
  "565": "Elmira (Corning)",
  "566": "Harrisburg-Lncstr-Leb-York",
  "567": "Greenvll-Spart-Ashevll-And",
  "569": "Harrisonburg",
  "570": "Myrtle Beach-Florence",
  "571": "Ft. Myers-Naples",
  "573": "Roanoke-Lynchburg",
  "574": "Johnstown-Altoona-St Colge",
  "575": "Chattanooga",
  "576": "Salisbury",
  "577": "Wilkes Barre-Scranton-Hztn",
  "581": "Terre Haute",
  "582": "Lafayette, IN",
  "583": "Alpena",
  "584": "Charlottesville",
  "588": "South Bend-Elkhart",
  "592": "Gainesville",
  "596": "Zanesville",
  "597": "Parkersburg",
  "598": "Clarksburg-Weston",
  "600": "Corpus Christi",
  "602": "Chicago",
  "603": "Joplin-Pittsburg",
  "604": "Columbia-Jefferson City",
  "605": "Topeka",
  "606": "Dothan",
  "609": "St. Louis",
  "610": "Rockford",
  "611": "Rochestr-Mason City-Austin",
  "612": "Shreveport",
  "613": "Minneapolis-St. Paul",
  "616": "Kansas City",
  "617": "Milwaukee",
  "618": "Houston",
  "619": "Springfield, MO",
  "622": "New Orleans",
  "623": "Dallas-Ft. Worth",
  "624": "Sioux City",
  "625": "Waco-Temple-Bryan",
  "626": "Victoria",
  "627": "Wichita Falls & Lawton",
  "628": "Monroe-El Dorado",
  "630": "Birmingham (Ann and Tusc)",
  "631": "Ottumwa-Kirksville",
  "632": "Paducah-Cape Girard-Harsbg",
  "633": "Odessa-Midland",
  "634": "Amarillo",
  "635": "Austin",
  "636": "Harlingen-Wslco-Brnsvl-McA",
  "637": "Cedar Rapids-Wtrlo-IWC&Dub",
  "638": "St. Joseph",
  "639": "Jackson, TN",
  "640": "Memphis",
  "641": "San Antonio",
  "642": "Lafayette, LA",
  "643": "Lake Charles",
  "644": "Alexandria, LA",
  "647": "Greenwood-Greenville",
  "648": "Champaign&Sprngfld-Decatur",
  "649": "Evansville",
  "650": "Oklahoma City",
  "651": "Lubbock",
  "652": "Omaha",
  "656": "Panama City",
  "657": "Sherman-Ada",
  "658": "Green Bay-Appleton",
  "659": "Nashville",
  "661": "San Angelo",
  "662": "Abilene-Sweetwater",
  "669": "Madison",
  "670": "Ft. Smith-Fay-Sprngdl-Rgrs",
  "671": "Tulsa",
  "673": "Columbus-Tupelo-W Pnt-Hstn",
  "675": "Peoria-Bloomington",
  "676": "Duluth-Superior",
  "678": "Wichita-Hutchinson Plus",
  "679": "Des Moines-Ames",
  "682": "Davenport-R.Island-Moline",
  "686": "Mobile-Pensacola (Ft Walt)",
  "687": "Minot-Bsmrck-Dcknsn(Wlstn)",
  "691": "Huntsville-Decatur (Flor)",
  "692": "Beaumont-Port Arthur",
  "693": "Little Rock-Pine Bluff",
  "698": "Montgomery-Selma",
  "702": "La Crosse-Eau Claire",
  "705": "Wausau-Rhinelander",
  "709": "Tyler-Longview(Lfkn&Ncgd)",
  "710": "Hattiesburg-Laurel",
  "711": "Meridian",
  "716": "Baton Rouge",
  "717": "Quincy-Hannibal-Keokuk",
  "718": "Jackson, MS",
  "722": "Lincoln & Hastings-Krny",
  "724": "Fargo-Valley City",
  "725": "Sioux Falls(Mitchell)",
  "734": "Jonesboro",
  "736": "Bowling Green",
  "737": "Mankato",
  "740": "North Platte",
  "743": "Anchorage",
  "744": "Honolulu",
  "745": "Fairbanks",
  "746": "Biloxi-Gulfport",
  "747": "Juneau",
  "749": "Laredo",
  "751": "Denver",
  "752": "Colorado Springs-Pueblo",
  "753": "Phoenix (Prescott)",
  "754": "Butte-Bozeman",
  "755": "Great Falls",
  "756": "Billings",
  "757": "Boise",
  "758": "Idaho Fals-Pocatllo(Jcksn)",
  "759": "Cheyenne-Scottsbluff",
  "760": "Twin Falls",
  "762": "Missoula",
  "764": "Rapid City",
  "765": "El Paso (Las Cruces)",
  "766": "Helena",
  "767": "Casper-Riverton",
  "770": "Salt Lake City",
  "771": "Yuma-El Centro",
  "773": "Grand Junction-Montrose",
  "789": "Tucson (Sierra Vista)",
  "790": "Albuquerque-Santa Fe",
  "798": "Glendive",
  "800": "Bakersfield",
  "801": "Eugene",
  "802": "Eureka",
  "803": "Los Angeles",
  "804": "Palm Springs",
  "807": "San Francisco-Oak-San Jose",
  "810": "Yakima-Pasco-Rchlnd-Knnwck",
  "811": "Reno",
  "813": "Medford-Klamath Falls",
  "819": "Seattle-Tacoma",
  "820": "Portland, OR",
  "821": "Bend, OR",
  "825": "San Diego",
  "828": "Monterey-Salinas",
  "839": "Las Vegas",
  "855": "SantaBarbra-SanMar-SanLuOb",
  "862": "Sacramnto-Stkton-Modesto",
  "866": "Fresno-Visalia",
  "868": "Chico-Redding",
  "881": "Spokane"
}

const continents = {
  AF: 'Africa',
  AN: 'Antarctica',
  AS: 'Asia',
  EU: 'Europe',
  NA: 'North America',
  OC: 'Oceania',
  SA: 'South America',
}
