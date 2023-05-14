import request from "supertest";
import app from "../src/server";

describe("Test Charities API Express Server", () => {
  test("the '/' endpoint with a GET request", async () => {
    // arrange
    const expectedResult = {
      charities: [
        {
          id: 1000671,
          name: "FAMILIES IN CARE",
          url: "http://www.familiesincare.com",
        },
        {
          id: 1000672,
          name: "THE ASPEX VISUAL ARTS TRUST LIMITED",
          url: "http://www.aspex.org.uk",
        },
        {
          id: 1000673,
          name: "THE FREEDOM CENTRE (WORKING WITH PEOPLE WITH DISABILITIES)",
          url: "http://www.freedom-centre.org.uk/",
        },
        {
          id: 1000674,
          name: "POSITIVELY UK",
          url: "http://www.positivelyuk.org",
        },
        {
          id: 1000675,
          name: "FELPHAM AND MIDDLETON LOCAL HISTORY WORKSHOP",
          url: "http://fmlhw.webplus.net",
        },
        {
          id: 1000676,
          name: "8TH ROYAL TUNBRIDGE WELLS SCOUT GROUP",
          url: "http://www.southboroughscouts.co.uk",
        },
        {
          id: 1000726,
          name: "Research Institute for Disabled Consumers",
          url: "http://www.ridc.org.uk",
        },
        { id: 1006724, name: "EVEN SWINDON COMMUNITY CENTRE", url: "" },
        {
          id: 1006726,
          name: "ALDERLEY EDGE SCHOOL FOR GIRLS",
          url: "http://www.aesg.co.uk",
        },
        {
          id: 1006769,
          name: "THE NEWMAN ASSOCIATION",
          url: "http://www.newman.org.uk",
        },
        {
          id: 1006816,
          name: "ENGLISH RECORDS COLLECTIONS (TRUST)",
          url: "",
        },
        {
          id: 1006902,
          name: "STURTON-LE-STEEPLE VILLAGE HALL MANAGEMENT COMMITTEE",
          url: "http://www.sturtonward.org.uk/sturton-hall/",
        },
        {
          id: 1006962,
          name: "EDUCATION FOR DEVELOPMENT",
          url: "http://www.educationfordevelopment.org.uk",
        },
        {
          id: 1007000,
          name: "THE PROVINCIAL GRAND CHARITY OF GLOUCESTERSHIRE",
          url: "",
        },
        {
          id: 1007028,
          name: "KNARESBOROUGH AND DISTRICT MEN'S FORUM",
          url: "http://www.knaresborough.co.uk/localgroups/mensforum",
        },
        {
          id: 1007044,
          name: "EAST SHROPSHIRE TALKING NEWSPAPER",
          url: "http://www.eastshropshiretn.co.uk",
        },
        {
          id: 1007104,
          name: "WHITEFRIARS PARENT SCHOOL ASSOCIATION",
          url: "",
        },
        {
          id: 1007207,
          name: "HEADWAY BRISTOL BRAIN INJURY ASSOCIATION LIMITED",
          url: "http://www.headwaybristol.org.uk",
        },
        {
          id: 1007305,
          name: "SHEFFIELD SCHOOLS CHRISTIAN WORKER TRUST",
          url: "http://www.cass-su.org.uk",
        },
        { id: 1007324, name: "QUIDHAMPTON CHURCH HALL", url: "" },
        {
          id: 1007326,
          name: "FRIENDS OF RUFFORD SCHOOL ASSOCIATION",
          url: "http://www.rufford.dudley.sch.uk",
        },
        {
          id: 1007335,
          name: "RHEUMATOLOGY DISCRETIONARY FUND UCL CHARITY",
          url: "",
        },
        {
          id: 1007348,
          name: "DERBY HIGH SCHOOL TRUST",
          url: "http://www.derbyhigh.derby.sch.uk",
        },
        {
          id: 1007409,
          name: "MILTON KEYNES ARTS CENTRE LTD",
          url: "http://www.miltonkeynesartscentre.org",
        },
        { id: 1007428, name: "AGE CONCERN LEAMINGTON SPA", url: "" },
        {
          id: 1007487,
          name: "GREATER MANCHESTER ACCESSIBLE TRANSPORT LIMITED",
          url: "http://www.ringandride.info",
        },
        { id: 1007503, name: "8TH WOLVERHAMPTON SCOUT GROUP", url: "" },
        {
          id: 1007505,
          name: "GEORGE BARTON MOTOR NEURONE DISEASE TRUST",
          url: "",
        },
        { id: 1007727, name: "NORTHREPPS VILLAGE HALL", url: "" },
        { id: 1007780, name: "REGINALD DALLIN MEMORIAL FUND", url: "" },
        {
          id: 1007789,
          name: "FRIENDS OF FRAMPTON COTTERELL C OF E SCHOOL",
          url: "http://www.fcceprimaryschool.co.uk",
        },
        {
          id: 1007842,
          name: "EAST HOATHLY AND DISTRICT AGE CONCERN",
          url: "",
        },
        {
          id: 1007918,
          name: "Groundwork South and North Tyneside Limited",
          url: "http://www.groundwork-stan.org.uk",
        },
        { id: 1007938, name: "SILVERDALE LODGE BENEVOLENT FUND", url: "" },
        { id: 1007940, name: "QUY VILLAGE HALL", url: "" },
        {
          id: 1007947,
          name: "OSEL ENTERPRISES LIMITED",
          url: "http://www.wightcrystal.org.uk;www.wayforwardprogramme.org.uk;www.oseliow.org.uk;www.workingtowardswellbeing.org.uk;",
        },
        { id: 1007957, name: "FENWICK CHARITABLE TRUST", url: "" },
        {
          id: 1008033,
          name: "WOODNEWTON VILLAGE HALL",
          url: "http://www.woodnewtonvillagehall.co.uk",
        },
        {
          id: 1008069,
          name: "FRIENDS OF HERNE MILL",
          url: "http://www.hernewindmill.co.uk",
        },
        {
          id: 1008081,
          name: "KINGSWOOD EQUESTRIAN TRUST",
          url: "https://www.kingswoodec.co.uk",
        },
        {
          id: 1010457,
          name: "PROCEEDS OF SALE OF THE FORMER FREE LIBRARY",
          url: "http://www.chorley.gov.uk",
        },
        {
          id: 1010541,
          name: "INNOVATE TRUST LTD",
          url: "http://www.innovate-trust.org.uk",
        },
        {
          id: 1010546,
          name: "BLACKBURNE HOUSE",
          url: "http://www.blackburnehouse.co.uk",
        },
        {
          id: 1010563,
          name: "JESMOND COMMUNITY LEISURE",
          url: "http://jesmondpool.online/",
        },
        {
          id: 1010576,
          name: "ST DAVID'S FOUNDATION HOSPICE CARE",
          url: "http://www.stdavidshospicecare.org",
        },
        {
          id: 1010595,
          name: "LEVENS CHOIR",
          url: "http://www.levenschoir.net",
        },
        {
          id: 1010632,
          name: "BRISTOL AERO COLLECTION TRUST",
          url: "http://www.aerospacebristol.org",
        },
        {
          id: 1010656,
          name: "STAPLES TRUST",
          url: "http://www.sfct.org.uk",
        },
        {
          id: 1010660,
          name: "CYMDEITHAS DREFTADAETH Y BALA A PHENLLYN",
          url: "",
        },
        {
          id: 1010678,
          name: "THE SAINT ALDHELM LODGE NO 2888 BENEVOLENT FUND",
          url: "",
        },
        { id: 1010731, name: "DEAF ACCESS TRUST", url: "" },
        { id: 1010760, name: "DISCIPLES OF JESUS", url: "" },
        {
          id: 1010786,
          name: "SIOBHAN DAVIES DANCE COMPANY",
          url: "http://www.siobhandavies.com",
        },
        {
          id: 1010787,
          name: "SURREY GARDENS TRUST",
          url: "http://www.surreygardenstrust.co.uk",
        },
        {
          id: 1010813,
          name: "HEULWEN TRUST",
          url: "http://www.heulwentrust.co.uk",
        },
        {
          id: 1010855,
          name: "SANATAN DHARM HINDU TEMPLE SOCIETY",
          url: "",
        },
        {
          id: 1010864,
          name: "OLD COULSDON COLTS BOYS FOOTBALL CLUB",
          url: "http://occfc.com",
        },
        {
          id: 1010895,
          name: "ALVERTON SINGERS",
          url: "http://www.alvertonsingers.org.uk",
        },
        {
          id: 1010896,
          name: "CHELMSFORD AND DISTRICT EVANGELICAL FELLOWSHIP",
          url: "http://www.symchelmsford.org",
        },
        {
          id: 1010903,
          name: "THAMES EXPLORER TRUST",
          url: "http://www.thames-explorer.org.uk",
        },
        { id: 1010912, name: "VICTOR FORD FOUNDATION", url: "" },
        { id: 1010914, name: "FRIENDS OF BNEI DAVID", url: "" },
        {
          id: 1010930,
          name: "PRINCESS ALICE HOSPICE",
          url: "http://www.pah.org.uk",
        },
        { id: 1010952, name: "AKYEM TAFO UNION OF GREAT BRITAIN", url: "" },
        { id: 1010955, name: "HETSTAN TRUST", url: "" },
        {
          id: 1011040,
          name: "FRIENDS OF RATCLIFFE SCHOOL ASSOCIATION",
          url: "",
        },
        {
          id: 1011053,
          name: "THE VALERIE NICHOLS MEMORIAL PRIZE TRUST",
          url: "",
        },
        {
          id: 1011086,
          name: "THE BEARR TRUST",
          url: "http://www.bearr.org",
        },
        { id: 1011095, name: "THE DIDHAM CHARITABLE TRUST", url: "" },
        {
          id: 1011106,
          name: "FRIENDS OF ASPIN SCHOOL",
          url: "http://www.aspinpta.co.uk",
        },
        {
          id: 1011108,
          name: "MID BORDER COMMUNITY ARTS LTD",
          url: "http://www.midborderarts.org.uk",
        },
        {
          id: 1011135,
          name: "THE WILLOWS PARENTS, TEACHERS AND FRIENDS ASSOCIATION",
          url: "",
        },
        {
          id: 1011145,
          name: "BRITISH TINNITUS ASSOCIATION",
          url: "http://www.tinnitus.org.uk",
        },
        {
          id: 1011220,
          name: "NAM PUBLICATIONS",
          url: "http://www.aidsmap.com",
        },
        {
          id: 1011295,
          name: "THE KINGSTON UNIVERSITY OF THE THIRD AGE",
          url: "http://www.kingstonu3a.org.uk",
        },
        { id: 1011296, name: "TREVOR SPENCER CHARITABLE TRUST", url: "" },
        {
          id: 1011301,
          name: "5TH BECKENHAM SOUTH SCOUT GROUP",
          url: "https://www.thefifth.org.uk",
        },
        {
          id: 1011327,
          name: "HORTICARE",
          url: "http://www.horticarewakefield.org.uk",
        },
        {
          id: 1011344,
          name: "THE BASIL SLAUGHTER TRUST FOR ADULT EDUCATION",
          url: "",
        },
        { id: 1011347, name: "HASAN CHARITABLE TRUST", url: "" },
        {
          id: 1011366,
          name: "FRIENDS OF THE ISRAEL OPERA TRUST",
          url: "http://friendsofisraelopera.org/",
        },
        {
          id: 1011378,
          name: "ILAM SCHOOL ASSOCIATION",
          url: "http://www.ilam.staffs.sch.uk",
        },
        {
          id: 1011386,
          name: "HEREFORDSHIRE ORGANISTS' SOCIETY",
          url: "https://www.google.co.uk/?gws_rd=ssl#q=herefordshire+organists+society",
        },
        { id: 1011394, name: "HUBY PLAYGROUND APPEAL", url: "" },
        { id: 1011396, name: "JOHN BAGLEY MUSIC TRUST", url: "" },
        {
          id: 1011399,
          name: "CHRISTOW COUNTY PRIMARY SCHOOL P T F A",
          url: "",
        },
        {
          id: 1011495,
          name: "YMCA NORTH TYNESIDE",
          url: "http://www.ymcanorthtyneside.org",
        },
        {
          id: 1011496,
          name: "SHREE JALARAM SEVA TRUST",
          url: "http://www.shreejalaramsevatrust.org",
        },
        {
          id: 1011607,
          name: "THE WALTHAM ST LAWRENCE CHURCHES TRUST",
          url: "",
        },
        {
          id: 1011608,
          name: "FRIENDS OF PARK SURGERY",
          url: "http://www.parksurgery.com",
        },
        {
          id: 1011611,
          name: "THE PIED PIPER TRUST",
          url: "http://www.piedpiperappeal.co.uk",
        },
        {
          id: 1011618,
          name: "LLUSERN",
          url: "http://www.cristnogaeth21.cymru",
        },
        {
          id: 1011629,
          name: "CHERRY LODGE CANCER CARE",
          url: "http://www.cherrylodgecancercare.org.uk",
        },
        {
          id: 1011637,
          name: "DIAL-A-DREAM",
          url: "http://www.dial-a-dream.co.uk",
        },
        { id: 1011662, name: "HOLY TRINITY ROTHWELL TRUST", url: "" },
        { id: 1011663, name: "UNION LODGE BENEVOLENT FUND", url: "" },
        {
          id: 1011667,
          name: "THE MASONIC LODGE NO 3334 BENEVOLENT FUND",
          url: "",
        },
        {
          id: 1011723,
          name: "BANGLADESH YOUTH MOVEMENT",
          url: "http://www.bym.org.uk",
        },
        { id: 1011770, name: "THE TOWNSEND-JEANTET PRIZE TRUST", url: "" },
      ],
    };
    // act
    const res = await request(app).get("/");
    // assert
    expect(res.body).toEqual(expectedResult);
  });
  test("the '/:id' endpoint with a GET request containing a charity id", async () => {
    // arrange
    const id = 1000671;
    const expectedCharity = {
      id: 1000671,
      name: "FAMILIES IN CARE",
      url: "http://www.familiesincare.com",
    };
    // act
    const res = await request(app).get(`/${id}`);
    // assert
    expect(res.body).toEqual(
      expect.objectContaining({
        charity: expectedCharity,
      })
    );
  });
  test("the '/:id' endpoint with a GET request containing a charity id that is not present in the database", async () => {
    // arrange
    const id = 1000000;
    const expectedError = {
      error: {},
    };
    // act
    const res = await request(app).get(`/${id}`);
    // assert
    expect(res.body).toEqual(expect.objectContaining({}));
  });
});

// incorrect http request
// improper id
