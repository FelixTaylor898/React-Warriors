export const Action = Object.freeze({
    Title: 'Title',
    Leader: 'Leader',
    Deputy: 'Deputy',
    Medicine: 'Medicine',
    DeleteWarrior: 'DeleteWarrior',
    AddWarrior: 'AddWarrior',
    AddApprentice: 'AddApprentice',
    DeleteApprentice: 'DeleteApprentice',
    AddQueen: 'AddQueen',
    DeleteQueen: 'DeleteQueen',
    AddMedApp: 'AddMedApp',
    Hide: 'Hide',
    Show: 'Show',
    Generate: 'Generate',
    DeleteElder: 'DeleteElder',
    AddElder: 'AddElder',
    CreateKits: 'CreateKits',
    RemoveKits: 'RemoveKits',
    DelMedApp: 'DelMedApp'
});

export function delMedApprentice() {
    return { type : Action.DelMedApp };
}

export function generateKits(cat) {
    return { type : Action.CreateKits, payload: cat };
}

export function removeKits(cat) {
    return { type : Action.RemoveKits, payload: cat };
}

export function hideButtons() {
    return { type : Action.Hide };
}

export function generate() {
    return { type : Action.Generate };
}

export function showButtons() {
    return { type : Action.Show };
}

export function addMedApprentice() {
    return {type : Action.AddMedApp};
}

export function addElder() {
    return { type: Action.AddElder };
}

export function deleteElder(cat) {
    return {type : Action.DeleteElder, payload: cat};
}

export function deleteQueen(cat) {
    return {type : Action.DeleteQueen, payload: cat};
}

export function deleteApprentice(cat) {
    return {type : Action.DeleteApprentice, payload: cat};
}

export function addQueen() {
    return { type: Action.AddQueen };
}

export function addApprentice(cat) {
    return {type : Action.AddApprentice, payload: cat};
}

export function addWarrior() {
    return { type: Action.AddWarrior };
}

export function generateDeputy() {
    return { type : Action.Deputy };
}

export function generateTitle() {
    return { type : Action.Title };
}

export function generateMedicine() {
    return { type : Action.Medicine };
}

export function generateLeader() {
    return { type : Action.Leader };
}

export function deleteWarrior(cat) {
    return { type : Action.DeleteWarrior, payload: cat}
}