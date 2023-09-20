import p from '../json/prefix.json';
import s from '../json/suffix.json';
import f from '../json/fur.json';
import e from '../json/eyes.json';

export function genTitle() {
    return p[Math.floor(Math.random() * p.length)].concat("Clan");
}

export function generateKitString() {
    var str = "Kits: ";
    let kits = Math.random() * 3 + 1;
    for (let k = 0; k < kits; k++) {
        var name = p[Math.floor(Math.random() * p.length)].concat("kit");
        if (k === 0) str = str.concat(name);
        else str = str.concat(", ", name);
    }
    return str;
}

export function generateElders() {
    var elders = [];
    let w = Math.random() * 4;
    for (let k = 0; k < w; k++) {
        elders.push(generateCat("e"));
    }
    return elders;
}

export function generateQueens() {
    var queens = [];
    let w = Math.random() * 4;
    for (let k = 0; k < w; k++) {
        queens.push(generateCat("q"));
    }
    return queens;
}

export function generateWarriors() {
    var warriors = [];
    let w = Math.random() * 10 + 3;
    for (let k = 0; k < w; k++) {
        warriors.push(generateCat(null));
    }
    return warriors;
}

export function generateCat(role) {
    var cat = {
        "name": null,
        "fur": null,
        "gender": null,
        "eyes": null,
        "apprentice": null,
        "kits": null
    }
    var prefix = p[Math.floor(Math.random() * p.length)];
    var suffix = null;
    switch (role) {
        case "l":
            suffix = "star";
            break;
        case "q":
            cat.gender = "she-cat";
            break;
        case "a":
            suffix = "paw";
            break;
        default:
            break;
    }
    if (!cat.gender) cat.gender = Math.random() < 0.5 ? "tom" : "she-cat";
    do {
        cat.fur = f.colors[Math.floor(Math.random() * f.colors.length)];
    } while (cat.gender === "tom" && cat.fur === "tortoiseshell");
    if (cat.fur !== "white") {
        if (cat.fur !== "black") cat.fur = f.shades[Math.floor(Math.random() * f.shades.length)].concat(cat.fur);
        if (Math.random() < 0.5) cat.fur = cat.fur.concat("-and-white");
        if (Math.random() < 0.5) cat.fur = cat.fur.concat(" tabby");
    }
    if (!suffix) do {
        suffix = s[Math.floor(Math.random() * s.length)];
    } while (prefix.toLowerCase() === suffix);
    cat.name = prefix + suffix;
    cat.eyes = f.shades[Math.floor(Math.random() * f.shades.length)].concat(e[Math.floor(Math.random() * e.length)]);
    return cat;
}