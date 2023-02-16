import {danger, fail} from "danger"

// const { additions } = danger.github.pir;
// const { deletions } = danger.github.pir;
// if (additions < deletions) {
//     message(`${achievment} More code deleted than added!`);
// }
// else {
//     message(`${achievment} More code added than deleted pff!`);
// }

const pngBools = danger.git.fileMatch("**/*.png");
const jpgBools = danger.git.fileMatch("**/*.jpg");
if (pngBools.edited || jpgBools.edited) {
    fail("Whoops, convert image files to wepb format");
}