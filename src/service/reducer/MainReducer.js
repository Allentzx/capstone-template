import { combineReducers } from "redux";
import authentication from "./AuthenticateReducer";
import ProjectFetchReducer from "./ProjectFetchReducer";
import ProjectFormReducer from "./ProjectFormReducer";
// import PositionFormReducer from "./PositionFormReducer";
import CertificationSelectBarReducer from "./CertificationSelectBarReducer";
import HardSkillSelectBarReducer from "./HardSkillSelectBarReducer";
import SoftSkillSelectBarReducer from "./SoftSkillSelectBarReducer";
import PositionSelectBarReducer from "./PositionSelectBarReducer";
import positionUserReducer from "./AddUserPositionFormReducer";
import LanguageSelectBarReducer from "./LanguageSelectBarReducer";

import userReducer from "./AddUserReducer";

// import SuggestCandidateList from "./SuggestCandidateList";
// import SuggestCandidateSelect from "./SuggestCandidateSelect"
// import SuggestCandidateSelectedListReducer from "./SuggestCandidateSelectedListReducer";

const MainReducer = combineReducers({
    authentication,
    ProjectFetchReducer,
    ProjectFormReducer,
    userReducer,
    // PositionFormReducer,
    CertificationSelectBarReducer,
    HardSkillSelectBarReducer,
    SoftSkillSelectBarReducer,
    PositionSelectBarReducer,
    LanguageSelectBarReducer,
    positionUserReducer,
    
})

export default MainReducer