// Exports & Import (Module)
// File persion.js
const person = {
    name: 'Nguyen Van A'
}
export default person;

// File utility.js
export const clean = () => {
    // empty
}
export const baseData = 10;

// File app.js
import persion form './persion';
import prs form './persion';

import { baseData } form './utility';
import { clean as Cln } form './utility';
import * as bundled form './utility';