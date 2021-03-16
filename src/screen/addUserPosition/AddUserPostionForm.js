import React, { Component } from 'react';
import SelectBar from '../../component/create-position-form/select-search/SelectBar';
import { connect } from 'react-redux';
import { convertPositionList } from "../../service/util/util";
import HardSkillForm from '../../component/create-position-form/hard-skill-form/HardSkillForm';
import SoftSkillForm from '../../component/create-position-form/soft-skill-form/SoftSkillForm';
import LanguageForm from '../../component/create-position-form/language-form/LanguageForm';
import * as Action from "../../service/action/PositionSelectBarAction";


class AddUserPostionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMinimize: false
        }
    }


    componentDidMount = () => {
        var { positionList } = this.props
        if (typeof positionList === 'undefined' || positionList.length === 0) {
            this.props.fetchPostionList()
        }
    }

    convertPositionList = (positionList) => {
        var result = []
        positionList.forEach(element => {
            result.push({ label: element.name, value: element.id })
        });
        return result;
    }

    converLevelList = (levelList) => {
        var result = []
        levelList.forEach(element => {
            result.push({ label: element.name, value: element.levelID })
        });
        return result;
    }

    onDeletePositionForm = (positionFormIndex) => {
        this.props.onDeletePositionForm(positionFormIndex)
    }

    onUpdatePositionID = (value, positionFormIndex) => {
        this.props.onUpdatePositionID(value, positionFormIndex)
    }

 
    setMinimize = () => {
        this.setState({
            isMinimize: !this.state.isMinimize
        })
    }


    render() {
        var { item, positionFormIndex, positionList } = this.props
        var listConverted = convertPositionList(positionList)
        console.log(item)
        // var listCorvertedLevel = convertLevelList(levelList)
        const showSkill = () => {
            if (this.state.isMinimize)
                return ""
            else
                return (
                    <React.Fragment>
                        <LanguageForm language={item.language}
                            positionFormIndex={positionFormIndex}
                            onAddLanguage={this.props.onAddLanguage}
                            onDeleteLanguage={this.props.onDeleteLanguage}
                            onUpdateLanguageID={this.props.onUpdateLanguageID}
                            onUpdateLanguageLevel={this.props.onUpdateLanguageLevel}

                        />
                        <SoftSkillForm softSkill={item.softSkillIDs}
                            positionFormIndex={positionFormIndex}
                            onAddSoftSkill={this.props.onAddSoftSkill}
                            onDeleteSoftSkill={this.props.onDeleteSoftSkill}
                            onUpdateSoftSkillID={this.props.onUpdateSoftSkillID}
                        />
                        <HardSkillForm hardSkill={item.hardSkills}
                            positionFormIndex={positionFormIndex}
                            onAddHardSkill={this.props.onAddHardSkill}
                            onDeleteHardSkill={this.props.onDeleteHardSkill}
                            updateHardSkillExpPriority={this.props.updateHardSkillExpPriority}
                            onUpdateHardSkillLevel={this.props.onUpdateHardSkillLevel}
                            onUpdateHardSkillID={this.props.onUpdateHardSkillID}
                            onUpdateHardSkillCerti={this.props.onUpdateHardSkillCerti}
                        />
                    </React.Fragment>
                )
        }
        return (
            <div>
                <div className="card mb-50">
                    <div className="card-body">
                        <div className="form-group">
                            <div className="row">
                                {/* Position */}
                                <div className="col-1 mt-15-ml-30">
                                    <label className="bmd-label  ">
                                        <h4 className="font-weight-bold">
                                            Position
                            </h4>
                                    </label>
                                </div>

                                {/* Select Bar */}
                                <div className="col-4">
                                    <SelectBar
                                        list={listConverted}
                                        onUpdatePositionID={this.onUpdatePositionID}
                                        name="positionID"
                                        positionFormIndex={positionFormIndex}
                                        value={item.posID}
                                        
                                    />
                                </div>

                                <div className="col-2 mt-15-ml-30 fr">
                                    <label className="bmd-label ">
                                        <h4 className="font-weight-bold ">
                                            Level
                                </h4>
                                    </label>
                                </div>
                                <div className="col-3">
                                    {/* Select Bar */}
                                    <div className="col-4">
                                        <SelectBar
                                            list={listCorvertedLevel}
                                            onUpdatePositionLevel={this.onUpdatePositionLevel}
                                            name="LevelID"
                                            positionFormIndex={positionFormIndex}
                                            value={item.levelID}
                                        />
                                    </div>
                                </div>

                                {/* Button Add and Minimize */}
                                <div className="col">
                                    <span className="material-icons pull-right clear" onClick={() => this.onDeletePositionForm(positionFormIndex)}>clear</span>
                                    <span className="material-icons pull-right clear" onClick={this.setMinimize} > {this.state.isMinimize === false ? 'minimize' : 'crop_free'}</span>
                                </div>
                            </div>
                            {showSkill()}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        positionList: state.PositionSelectBarReducer
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        fetchPostionList: () => {
            dispatch(Action.fetchPostionList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(AddUserPostionForm);
