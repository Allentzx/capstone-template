import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUserPostionForm from './AddUserPostionForm';
import * as Action from "../../service/action/PositionAction";

class AddUserPosition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requiredPositions: {
                posID: '',
                Level: 0,
                language: [],
                softSkillIDs: [],
                hardSkills: []
            }
        }
    }


    // Position
    onUpdatePositionID = (positionID, positionFormIndex) => {
        this.props.onUpdatePositionID(positionID, positionFormIndex)
    }

    //Language
    onAddLanguage = (positionFormIndex) => {
        this.props.onAddLanguage(positionFormIndex)
    }

    onDeleteLanguage = (languageIndex, positionFormIndex) => {
        this.props.onDeleteLanguageItem(languageIndex, positionFormIndex)
    }

    onUpdateLanguageID = (value, langugageIndex, positionFormIndex) => {
        this.props.onUpdateLanguageID(value, langugageIndex, positionFormIndex)

    }

    onUpdateLanguageLevel = (value, langugageIndex, positionFormIndex) => {
        this.props.onUpdateLanguageLevel(value, langugageIndex, positionFormIndex)
    }

    // Soft Skill
    onAddSoftSkill = (positionFormIndex) => {
        this.props.onAddSoftSkillItem(positionFormIndex)
    }

    onDeleteSoftSkill = (softSkillIndex, positionFormIndex) => {
        this.props.onDeleteSoftSkillItem(softSkillIndex, positionFormIndex)
    }

    onUpdateSoftSkillID = (value, softSkillIndex, positionFormIndex) => {
        this.props.onUpdateSoftSkillID(value, softSkillIndex, positionFormIndex)
    }

    // Hard Skill
    onAddHardSkill = (positionFormIndex, hardSkillItem) => {
        this.props.onAddHardSkillItem(positionFormIndex, hardSkillItem)
    }

    onDeleteHardSkill = (hardSkillIndex, positionFormIndex) => {
        this.props.onDeleteHardSkillItem(hardSkillIndex, positionFormIndex)
    }

    updateHardSkillExpPriority = (hardSkillIndex, positionFormIndex, value, name) => {
        this.props.updateHardSkillExpPriority(hardSkillIndex, positionFormIndex, value, name)
    }



    onUpdateHardSkillID = (value, hardSkillIndex, positionFormIndex) => {
        this.props.onUpdateHardSkillID(value, hardSkillIndex, positionFormIndex)
    }

    onUpdateHardSkillLevel = (value, hardSkillIndex, positionFormIndex) => {
        this.props.onUpdateHardSkillLevel(value, hardSkillIndex, positionFormIndex)
    }

    onUpdateHardSkillCerti = (value, hardSkillIndex, positionFormIndex) => {
        this.props.onUpdateHardSkillCerti(value, hardSkillIndex, positionFormIndex)
    }

    onCreatePosition = (event) => {
        event.preventDefault()
        this.props.onCreatePosition(this.props.items)
    }

    getHardSkillListNotSelect = () => {
        var { hardSkillList, items } = this.props
        var listNotSelect = positionList.langID.slice(0, hardSkillList.length)
        for (let i = 0; i < listNotSelect.length; i++) {
            for (let k = 0; k < items.length; k++) {
                if (listNotSelect[i].posID === items[k].posID) {
                    var clone = { ...listNotSelect[i] }
                    clone.isSelect = true
                    listNotSelect[i] = clone
                }
            }
        }
        return listNotSelect
    }



    getSoftSkillListNotSelect = () => {
        var { softSkillList, items } = this.props
        var listNotSelect = softSkillList.softSkillID.slice(0, softSkillList.length)
        for (let i = 0; i < listNotSelect.length; i++) {
            for (let k = 0; k < items.length; k++) {
                if (listNotSelect[i].posID === items[k].posID) {
                    var clone = { ...listNotSelect[i] }
                    clone.isSelect = true
                    listNotSelect[i] = clone
                }
            }
        }
        return listNotSelect
    }
    getLangListNotSelect = () => {
        var { LangList, items } = this.props
        var listNotSelect = LangList.langID.slice(0, LangList.length)
        for (let i = 0; i < listNotSelect.length; i++) {
            for (let k = 0; k < items.length; k++) {
                if (listNotSelect[i].langID === items[k].langID) {
                    var clone = { ...listNotSelect[i] }
                    clone.isSelect = true
                    listNotSelect[i] = clone
                }
            }
        }
        return listNotSelect
    }

    showLanguageItems = (langItems) => {
        var langList = this.getLangListNotSelect()
        var result = null;
        result = langItems.map((langItem, positionFormIndex) => {
            return (
                <AddUserPostionForm
                    key={positionFormIndex}
                    positionFormIndex={positionFormIndex}
                    langList={langList}
                    langItem={langItem}
                    onDeleteLanguage={this.onDeleteLanguage}
                />
            );
        })
        return result;
    }


    showSoftSkillItems = (softSkillItems) => {
        var softSkillList = this.getSoftSkillListNotSelect()
        var result = null;
        result = softSkillItems.map((softSkillItem, positionFormIndex) => {
            return (
                <AddUserPostionForm
                    key={positionFormIndex}
                    positionFormIndex={positionFormIndex}
                    softSkillList={softSkillList}
                    softSkillItem={softSkillItem}
                    onAddSoftSkill={this.onAddSoftSkill}
                    onDeleteSoftSkill={this.onDeleteSoftSkill}
                    onUpdateSoftSkillID={this.onUpdateSoftSkillID}
                />
            );
        })
        return result;
    }


    showhardSkillItems = (hardSkillItems) => {
        var hardSkillList = this.getHardSkillListNotSelect()
        var result = null;
        result = hardSkillItems.map((hardSkillItem, positionFormIndex) => {
            return (
                <AddUserPostionForm
                    key={positionFormIndex}
                    positionFormIndex={positionFormIndex}
                    positionList={positionList}
                    hardSkillItem={hardSkillItem}
                    onAddHardSkill={this.onAddHardSkill}
                    onDeleteHardSkill={this.onDeleteHardSkill}
                    onUpdateHardSkillID={this.onUpdateHardSkillID}
                    onUpdateHardSkillCerti={this.onUpdateHardSkillCerti}
                    onUpdateHardSkillLevel={this.onUpdateHardSkillLevel}
                />
            );
        })
        return result;
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onCreatePosition} >
                    {this.showLanguageItems(this.props.langItems)}
                    <div >
                        <button type="button" className="btn btn-primary" onClick={this.onAddPosition}>
                            <i className="material-icons mr-5">add_box</i>
                    More Position
                    </button>
                    </div>
                    <div >
                        <button type="submit" className="btn btn-primary pull-right">Create Position</button>
                    </div>
                </form>

                <form onSubmit={this.onCreatePosition} >
                    {this.showSoftSkillItems(this.props.softSkillItems)}
                    <div >
                        <button type="button" className="btn btn-primary" onClick={this.onAddPosition}>
                            <i className="material-icons mr-5">add_box</i>
                    More Position
                    </button>
                    </div>
                    <div >
                        <button type="submit" className="btn btn-primary pull-right">Create Position</button>
                    </div>
                </form>
                <form onSubmit={this.onCreatePosition} >
                    {this.showhardSkillItems(this.props.hardSkillItem)}
                    <div >
                        <button type="button" className="btn btn-primary" onClick={this.onAddPosition}>
                            <i className="material-icons mr-5">add_box</i>
                    More Position
                    </button>
                    </div>
                    <div >
                        <button type="submit" className="btn btn-primary pull-right">Create Position</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        items: state.PositionFormReducer,
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddPosition: (positionItem) => {
            dispatch(Action.addPositionRequire(positionItem))
        },
        onDeletePosition: (positionFormIndex) => {
            dispatch(Action.deletePositionRequire(positionFormIndex))
        },
        onUpdatePositionID: (positionID, positionFormIndex) => {
            dispatch(Action.updatePositionID(positionID, positionFormIndex))
        },

        onAddLanguage: (positionFormIndex) => {
            dispatch(Action.addLanguageRequire(positionFormIndex))
        },
        onDeleteLanguageItem: (languageIndex, positionFormIndex) => {
            dispatch(Action.deleteLanguageRequire(languageIndex, positionFormIndex))
        },
        onUpdateLanguageID: (languageID, languageIndex, positionFormIndex) => {
            dispatch(Action.updateLanguageID(languageID, languageIndex, positionFormIndex))
        },
        // onUpdateLanguageLevel: (languageID, languageIndex, positionFormIndex) => {
        //     dispatch(Action.onUpdateLanguageLevel(languageID, languageIndex, positionFormIndex))
        // },
        onAddSoftSkillItem: positionFormIndex => {
            dispatch(Action.addSoftSkillRequire(positionFormIndex))
        },
        onDeleteSoftSkillItem: (softSkillIndex, positionFormIndex) => {
            dispatch(Action.deleteSoftSkillRequire(softSkillIndex, positionFormIndex))
        },
        onUpdateSoftSkillID: (softSkillID, softSkillIndex, positionFormIndex) => {
            dispatch(Action.updateSoftSkillID(softSkillID, softSkillIndex, positionFormIndex))
        },
        onAddHardSkillItem: (positionFormIndex, hardSkillItem) => {
            dispatch(Action.addHardSkillRequire(positionFormIndex, hardSkillItem))
        },
        onDeleteHardSkillItem: (hardSkillIndex, positionFormIndex) => {
            dispatch(Action.deleteHardSkillRequire(hardSkillIndex, positionFormIndex))
        },
        // updateHardSkillExpPriority: (hardSkillIndex, positionFormIndex, value, name) => {
        //     dispatch(Action.updateHardSkillExpPriority(hardSkillIndex, positionFormIndex, value, name))
        // },
        onUpdateHardSkillID: (value, hardSkillIndex, positionFormIndex) => {
            dispatch(Action.updateHardSkillID(value, hardSkillIndex, positionFormIndex))
        },
        // onUpdateHardSkillLevel: (value, hardSkillIndex, positionFormIndex) => {
        //     dispatch(Action.onUpdateHardSkillLevel(value, hardSkillIndex, positionFormIndex))
        // },
        onUpdateHardSkillCerti: (value, hardSkillIndex, positionFormIndex) => {
            dispatch(Action.updateHardSkillCerti(value, hardSkillIndex, positionFormIndex))
        },
        onCreatePosition: (positionItem) => {
            dispatch(Action.createPosition(positionItem))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(AddUserPosition);