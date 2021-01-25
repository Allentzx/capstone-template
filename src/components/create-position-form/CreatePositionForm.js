import React, { Component } from 'react';
import { connect } from 'react-redux';
import HardSkillForm from './hard-skill-form/HardSkillForm';
import SelectSearch from './select-search/SelectSearch';
import SoftSkillForm from './soft-skill-form/SoftSkillForm';
import * as Action from "../../store/store-action/PositionSelectBarAction";
import {convertList} from "../../util";

class CreatePositionForm extends Component {

    componentDidMount=()=>{
        var {positionList} = this.props
        if(typeof positionList === 'undefined' || positionList.length === 0){
            this.props.fetchPostionList()
        }
        
    }

    convertPositionList = (positionList) => {
        var result = []
        positionList.forEach(element => {
            result.push({label: element.name, value: element.id})
        });
        return result;
    }

    onDeletePositionForm = (positionFormIndex) => {
        this.props.onDeletePositionForm(positionFormIndex)
    }

    render() {
        var { item, positionFormIndex, positionList } = this.props
        var listConverted = convertList(positionList)
        return (
            <div className="card mb-50">
                <div className="card-body">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-1 mt-15-ml-30">
                                <label className="bmd-label  ">
                                    <h4 className="font-weight-bold">
                                        Position
                                </h4>
                                </label>
                            </div>
                            <div className="col-4">
                                <SelectSearch list={listConverted} />
                            </div>
                            <div className="col-2 mt-15-ml-30 fr">
                                <label className="bmd-label ">
                                    <h4 className="font-weight-bold ">
                                        Number of candidate
                                    </h4>
                                </label>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <input type="number" className="form-control" min="0" />
                                </div>
                            </div>
                            <div className="col">
                                <span className="material-icons pull-right clear" onClick={() => this.onDeletePositionForm(positionFormIndex)}>clear</span>
                            </div>
                        </div>

                        {/* Soft Skill form */}
                        <SoftSkillForm softSkill={item.softSkill}
                            positionFormIndex={positionFormIndex}
                            onAddSoftSkill={this.props.onAddSoftSkill}
                            onDeleteSoftSkill={this.props.onDeleteSoftSkill} />

                        {/* Hard Skill form */}
                        <HardSkillForm hardSkill={item.hardSkill}
                            positionFormIndex={positionFormIndex}
                            onAddHardSkill={this.props.onAddHardSkill}
                            onDeleteHardSkill={this.props.onDeleteHardSkill} />
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
export default connect(mapStateToProps, mapDispatchToProp)(CreatePositionForm);