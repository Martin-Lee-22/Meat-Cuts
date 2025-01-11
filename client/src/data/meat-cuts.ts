import type { animal } from "@/types/animals"

const path = '@/assets/images/'

const cow: animal = {
    id: 0,
    type: "cow",
    cuts: [
        {
            id: 0,
            title: "chuck",
            shape: "poly",
            coords: "1210,663,1207,397,1212,193,1541,177,1588,386,1597,561,1593,656"
        },
        {
            id: 1,
            title: "rib",
            shape: "poly",
            coords: "792,250,779,704,1203,663,1208,197"
        },
        {
            id: 2,
            title: "short loin",
            shape: "poly",
            coords: "525,231,790,250,775,699,530,771"
        },
        {
            id: 3,
            title: "sirloin",
            shape: "poly",
            coords: "284,228,275,324,520,342,527,233"
        },
        {
            id: 4,
            title: "tenderloin",
            shape: "poly",
            coords: "275,332,276,412,682,407,675,371"
        },
        {
            id: 5,
            title: "sirloin",
            shape: "poly",
            coords: "273,423,269,535,511,527,514,419"
        },
        {
            id: 6,
            title: "sirloin",
            shape: "poly",
            coords: "271,541,287,886,407,811,525,771,513,532"
        },
        {
            id: 7,
            title: "round",
            shape: "poly",
            coords: "276,230,128,264,65,324,49,407,62,475,78,562,96,645,99,736,81,818,117,854,205,882,278,882"
        },
        {
            id: 8,
            title: "shank",
            shape: "poly",
            coords: "81,841,22,941,22,995,46,1036,76,1068,115,1059,165,1022,201,973,244,927,278,886"
        },
        {
            id: 9,
            title: "flank",
            shape: "poly",
            coords: "285,888,445,909,541,932,668,963,745,979,799,979,779,709,607,750,450,798"
        },
        {
            id: 10,
            title: "plate",
            shape: "poly",
            coords: "783,709,806,977,1051,945,1121,932,1224,941,1201,662"
        },
        {
            id: 11,
            title: "brisket",
            shape: "poly",
            coords: "1205,666,1226,948,1396,932,1479,873,1521,823,1554,784,1577,743,1588,700,1593,659"
        },
        {
            id: 12,
            title: "shank",
            shape: "poly",
            coords: "1389,938,1226,948,1262,1108,1292,1136,1326,1136,1359,1113,1377,1090"
        }
    ]
}

export {cow}