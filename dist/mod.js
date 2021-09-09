'use strict';

var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

function getJson(filePath) {
    var fileContent = fs__default['default'].readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
}
function getDir(dirPath) {
    return fs__default['default'].readdirSync(dirPath);
}
function sourceFiles(inputDir) {
    var fileList = getDir(inputDir);
    var jsonFiles = fileList.map(function (filename) {
        return getJson(inputDir + "/" + filename);
    });
    return jsonFiles;
}

var attributes = {
    0x1: "EARTH",
    0x2: "WATER",
    0x4: "FIRE",
    0x8: "WIND",
    0x10: "LIGHT",
    0x20: "DARK",
    0x40: "DIVINE",
    0x7f: "ALL",
};
var race = {
    0x1: "WARRIOR",
    0x2: "SPELLCASTER",
    0x4: "FAIRY",
    0x8: "FIEND",
    0x10: "ZOMBIE",
    0x20: "MACHINE",
    0x40: "AQUA",
    0x80: "PYRO",
    0x100: "ROCK",
    0x200: "WINGED_BEAST",
    0x400: "PLANT",
    0x800: "INSECT",
    0x1000: "THUNDER",
    0x2000: "DRAGON",
    0x4000: "BEAST",
    0x8000: "BEAST_WARRIOR",
    0x10000: "DINOSAUR",
    0x20000: "FISH",
    0x40000: "SEA_SERPENT",
    0x80000: "REPTILE",
    0x100000: "PSYCHIC",
    0x200000: "DIVINE_BEAST",
    0x400000: "CREATOR_GOD",
    0x800000: "WYRM",
    0x1000000: "CYBERSE",
    0x1ffffff: "ALL",
};
var type = {
    0x1: "MONSTER / ANIME",
    0x2: "SPELL - NORMAL / ANIME",
    0x4: "TRAP - NORMAL / ANIME",
    0x10: "MONSTER - NORMAL / ANIME",
    0x20: "MONSTER - EFFECT / ANIME",
    0x40: "MONSTER - FUSION / ANIME",
    0x80: "MONSTER - RITUAL / ANIME",
    0x200: "MONSTER - SPIRIT / ANIME",
    0x400: "MONSTER - UNION / ANIME",
    0x800: "MONSTER - GEMINI / ANIME",
    0x1000: "MONSTER - TUNER / ANIME",
    0x2000: "MONSTER - SYNCHRO / ANIME",
    0x4000: "MONSTER - TOKEN",
    0x10000: "SPELL - QUICKPLAY / ANIME",
    0x20000: "SPELL - CONTINUOUS / ANIME",
    0x40000: "SPELL - EQUIP / ANIME",
    0x80000: "SPELL - FIELD / ANIME",
    0x100000: "TRAP - COUNTER / ANIME",
    0x200000: "MONSTER - FLIP / ANIME",
    0x400000: "MONSTER - TOON / ANIME",
    0x800000: "MONSTER - XYZ / ANIME",
    0x1000000: "MONSTER - PENDULUM / ANIME",
    0x2000000: "MONSTER - NOMI / ANIME",
    0x4000000: "MONSTER - LINK / ANIME",
    65538: "SPELL - QUICKPLAY",
    131074: "SPELL - CONTINUOUS",
    262146: "SPELL - EQUIP",
    524290: "SPELL - FIELD",
    130: "SPELL - RITUAL",
    131076: "TRAP - CONTINUOUS",
    1048580: "TRAP - COUNTER",
    4257: "MONSTER - RITUAL / TUNER / EFFECT",
    2101281: "MONSTER - FLIP / EFFECT",
    4193: "MONSTER - FUSION / TUNER / EFFECT",
    16777761: "MONSTER - PENDULUM / SPIRIT / EFFECT",
    33554977: "MONSTER - SPIRIT / NOMI / EFFECT",
    17: "MONSTER - NORMAL",
    33: "MONSTER - EFFECT",
    65: "MONSTER - FUSION",
    129: "MONSTER - RITUAL",
    97: "MONSTER - FUSION / EFFECT",
    161: "MONSTER - RITUAL / EFFECT",
    545: "MONSTER - SPIRIT",
    673: "MONSTER - RITUAL / SPIRIT",
    1057: "MONSTER - UNION",
    4113: "MONSTER - NORMAL / TUNER",
    4129: "MONSTER - EFFECT / TUNER",
    33558561: "MONSTER - TUNER / EFFECT / NOMI",
    4161: "MONSTER - FUSION / TUNER",
    5153: "MONSTER - UNION / TUNER",
    8193: "MONSTER - SYNCHRO",
    8225: "MONSTER - SYNCHRO / EFFECT",
    12321: "MONSTER - SYNCHRO / TUNER",
    16385: "MONSTER - TOKEN",
    16401: "MONSTER - TOKEN",
    2097185: "MONSTER - FLIP / TUNER / EFFECT",
    4194337: "MONSTER - TOON",
    8388609: "MONSTER - XYZ",
    8388641: "MONSTER - XYZ / EFFECT",
    16777233: "MONSTER - PENDULUM / NORMAL",
    16777249: "MONSTER - PENDULUM / EFFECT",
    16777313: "MONSTER - PENDULUM / FUSION / EFFECT",
    16781329: "MONSTER - PENDULUM / TUNER / NORMAL",
    16781345: "MONSTER - PENDULUM / TUNER / EFFECT",
    16785441: "MONSTER - PENDULUM / SYNCHRO / EFFECT",
    18874401: "MONSTER - PENDULUM / FLIP / EFFECT",
    25165857: "MONSTER - PENDULUM / XYZ / EFFECT",
    33554465: "MONSTER - NOMI / EFFECT",
    37748769: "MONSTER - TOON / EFFECT",
    50331681: "MONSTER - PENDULUM / EFFECT",
    67108897: "MONSTER - LINK / EFFECT",
    67108865: "MONSTER - LINK",
    2081: "MONSTER - GEMINI",
    134217728: "MISC",
    0: "MISC",
    268435458: "MISC",
    268435460: "MISC",
    268451840: "MISC",
    268959746: "MISC",
};
var ot = {
    0x1: "OCG",
    0x2: "TCG",
    0x4: "ANIME",
    0x8: "ILLEGAL",
    0x10: "VIDEOGAME",
    0x20: "CUSTOM",
    0x40: "SPEED",
    0x100: "PRE_RELEASE",
    0x200: "RUSH",
    0x400: "LEGEND",
    0x1000: "HIDDEN",
};

function format(set) {
    set.datas; var texts = set.texts;
    return function (_a) {
        var _b, _c, _d, _e, _f;
        var ot$1 = _a.ot, type$1 = _a.type, atk = _a.atk, def = _a.def, level = _a.level, race$1 = _a.race, attribute = _a.attribute, id = _a.id, setcode = _a.setcode;
        var _g = (_b = texts.find(function (item) { return item.id === id; })) !== null && _b !== void 0 ? _b : {
            name: 'No Name',
            desc: 'No Desc'
        }, name = _g.name, desc = _g.desc;
        return {
            id: id,
            name: name,
            desc: desc,
            ot: (_c = ot[ot$1]) !== null && _c !== void 0 ? _c : ot$1,
            type: (_d = type[type$1]) !== null && _d !== void 0 ? _d : type$1,
            atk: atk,
            def: def,
            level: level,
            race: (_e = race[race$1]) !== null && _e !== void 0 ? _e : race$1,
            attribute: (_f = attributes[attribute]) !== null && _f !== void 0 ? _f : attribute,
            setcode: setcode
        };
    };
}

function excludeLengths(min, max) {
    return function (card) {
        var id = "" + card.id;
        var length = id.length;
        return length !== min && length !== max;
    };
}
function excludePrefix(prefix) {
    return function (card) {
        var id = "" + card.id;
        return !id.startsWith("" + prefix);
    };
}
// how cards are categorized
// https://discord.com/channels/170601678658076672/208066323429720064/583840491867734026
var noScripts = excludeLengths(3, 4);
var noAnime1 = excludePrefix(511);
var noAnime2 = excludePrefix(512);
var noAnime3 = excludePrefix(513);
var nonOfficial = excludeLengths(9, 11);
var filters = [noScripts, noAnime1, noAnime2, noAnime3, nonOfficial];
function filter(cards) {
    return cards.filter(function (card) { return filters.every(function (filter) { return filter(card); }); });
}

function extractData(items, outputPath) {
    var formatted = items.flatMap(function (set) {
        var datas = set.datas;
        return datas.map(format(set));
    });
    var filtered = filter(formatted);
    fs.writeFileSync(outputPath, JSON.stringify(filtered));
}

function main(inputDir, outputPath) {
    var data = sourceFiles(inputDir);
    extractData(data, outputPath);
}

module.exports = main;
