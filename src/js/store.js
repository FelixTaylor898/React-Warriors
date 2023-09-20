import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { genTitle, generateCat, generateWarriors, generateQueens, generateElders, generateKitString } from "./util.js"
import { Action } from './action.js'

const initialStore = {
    clanName: genTitle(),
    leader: generateCat("l"),
    warriors: generateWarriors(),
    deputy: generateCat(null),
    apprentices: [],
    queens: generateQueens(),
    elders: generateElders(),
    medicine: generateCat(),
    medApp: null,
    show: true,
    justUpdate: true
}

function reducer(state, action) {
    switch (action.type) {
        case Action.Generate:
            return {
                ...state,
                clanName: genTitle(),
                leader: generateCat("l"),
                warriors: generateWarriors(),
                deputy: generateCat(null),
                apprentices: [],
                queens: generateQueens(),
                elders: generateElders(),
                medicine: generateCat(),
                medApp: null,
            }
        case Action.Show:
            return {
                ...state,
                show: true
            }
        case Action.Hide:
            return {
                ...state,
                show: false
            }
        case Action.Title:
            return {
                ...state,
                clanName: genTitle()
            }
        case Action.CreateKits:
            action.payload.kits = generateKitString();
            return {
                ...state,
                justUpdate: !state.justUpdate
            }
        case Action.RemoveKits:
            action.payload.kits = null;
            return {
                ...state,
                justUpdate: !state.justUpdate
            }
        case Action.AddMedApp:
            return {
                ...state,
                medApp: generateCat("a")
            }
        case Action.Leader:
            var lapp = state.leader.apprentice;
            return {
                ...state,
                leader: generateCat("l"),
                apprentices: state.apprentices.filter(cat => cat !== lapp),
            }
        case Action.Deputy:
            var dapp = state.deputy.apprentice;
            return {
                ...state,
                deputy: generateCat(null),
                apprentices: state.apprentices.filter(cat => cat !== dapp),
            }
        case Action.Medicine:
            return {
                ...state,
                medicine: generateCat(null)
            }
        case Action.DeleteQueen:
            return {
                ...state,
                queens: state.queens.filter(cat => cat !== action.payload),
            }
        case Action.DeleteWarrior:
            return {
                ...state,
                warriors: state.warriors.filter(cat => cat !== action.payload),
            }
        case Action.DeleteElder:
            return {
                ...state,
                elders: state.elders.filter(cat => cat !== action.payload),
            }
        case Action.DeleteApprentice:
            var a = action.payload.apprentice;
            action.payload.apprentice = null;
            return {
                ...state,
                apprentices: state.apprentices.filter(cat => cat !== a),
            }
        case Action.AddWarrior:
            return {
                ...state,
                warriors: [generateCat(null), ...state.warriors]
            }
        case Action.AddElder:
            return {
                ...state,
                elders: [generateCat(null), ...state.elders]
            }
        case Action.DelMedApp:
            return {
                ...state,
                medApp: null
            }
        case Action.AddQueen:
            return {
                ...state,
                queens: [generateCat("q"), ...state.queens]
            }
        case Action.AddApprentice:
            var app = generateCat("a");
            action.payload.apprentice = app;
            return {
                ...state,
                apprentices: [app, ...state.apprentices]
            }
        default:
            return state;
    }
}

export const store = createStore(reducer, initialStore, applyMiddleware(thunk));