// 正则验证集合
export const ruleData = {
    // key  :为验证名字
    // value :数组
        // [
        //     rule :验证规则
        //     msg  :提示信息    
        // ]  
    // rule :验证规则
    // msg  :提示信息
    //企业准入

    //准入事项申请书
    admMatlmportMergingTemplates:{
        url:'',
        proofRule:{
            // 验证签发人
            signer:{
                content:[
                    {
                        rule: /\S/,
                        msg:"签发人不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                        msg:"签发人不符合验证"
                    },
                    
                ],
                mustFill:false 
            }
        }
        // 未完待续
    },
    // 收文管理
    departmentServdepartmentworkLettersaveRetrieveArticleById:{
        url:'/departmentServ/department/workLetter/saveRetrieveArticleById',
        proofRule:{
            // 验证收文意见
            incomingMsgOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"收文意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"收文意见不符合验证"
                    }
                ],
                mustFill:true 

            }
            
        },
        
    },
    // 形式审查一
    departmentServdepartmentaccessAuditsaveAccessAudiById:{
        url:'/departmentServ/department/accessAudit/saveAccessAudiById',
        proofRule:{
            // 受理依据
            admissibleBasis:{
                content:[
                    {
                        rule: /\S/,
                        msg:"受理依据不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"受理依据不符合验证"
                    }
                ],
                mustFill:true
            },
            // 工作人员
            admissiblePerson:{
                content:[
                    {
                        rule: /\S/,
                        msg:"工作人员不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                        msg:"工作人员不符合验证"
                    }
                ],
                mustFill:true
            },
            // 联系电话
            admissiblePersonPhone:{
                content:[
                    {
                        rule: /\S/,
                        msg:"联系电话不应为空"    
                    },
                    {
                        rule:/^((0\d{2,3}-\d{7,8})|(1[35894]\d{9}))$/,
                        msg:"联系电话不符合验证"
                    }
                ],
                mustFill:true
            },
            // 不予受理依据
            approvalOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"不予受理依据不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"不予受理依据不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证材料名称
            materialName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"材料名称不应为空"    
                    },
                    {
                        // ^1[345678]\d{9}$
                        rule:/^.{1,20}$/,
                        msg:"材料名称不符合验证"
                    }
                ],
                mustFill:true
            },
            // 联系人
            contactrule:{
                content:[
                    {
                        rule: /\S/,
                        msg:"联系人不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                        msg:"联系人不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 验证补正要求
            correctionRequest:{
                content:[
                    {
                        rule: /\S/,
                        msg:"补正要求不应为空"    
                    },
                    {
                        // ^1[345678]\d{9}$
                        rule:/^.{1,30}$/,
                        msg:"补正要求不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 验证备注
            remarks:{
                content:[
                    {
                        rule: /\S/,
                        msg:"备注不应为空"    
                    },
                    {
                        // ^1[345678]\d{9}$
                        rule:/^.{1,30}$/,
                        msg:"备注不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证传真(可用)  区号加传真号，传真号可能是七位或者八位数字组成  例如：010-88558907
            contactFax:{
                content:[
                    {
                        rule: /\S/,
                        msg:"传真不应为空"    
                    },
                    {
                        rule:/^(\d{3,4}-)?\d{7,8}$/,
                        msg:"传真不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 验证通讯地址
            postalAddress:{
                content:[
                    {
                        rule: /\S/,
                        msg:"通讯地址不应为空"    
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"通讯地址不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证邮政编码()
            mailEncoding:{
                content:[
                    {
                        rule: /\S/,
                        msg:"邮政编码不应为空"    
                    },
                    {
                        rule:/^[0-9]{6}$/,
                        msg:"邮政编码不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 验证其它
            otherTexts:{
                content:[
                    {
                        rule: /\S/,
                        msg:"其它不应为空"    
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"其它不符合验证"
                    }
                ],
                mustFill:true
            }
            
        }
    },

    // 形式审查三（名字错）
    departmentServdepartmentaccessAuditsaveAccessAudiInfoById:{
        url:'/departmentServ/department/accessAudit/saveAccessAudiInfoById',
        proofRule:{
            // 验证审批意见
            departmentLevelThreeExaminationOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审批意见不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证审批意见
            departmentLevelTwoExaminationOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审批意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 资料审查一
    departmentServdepartmentdatumAccessAuditsaveDatumAccessAudiById:{
        url:'/departmentServ/department/datumAccessAudit/saveDatumAccessAudiById',
        proofRule:{
            // 验证审批意见
            departmentLevelOneExaminationOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审批意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 资料审查二
    departmentServdepartmentdatumAccessAuditsaveAccessAudiInfoById:{
        url:'/departmentServ/department/datumAccessAudit/saveAccessAudiInfoById',
        proofRule:{
            // 验证审批意见
            departmentLevelTwoExaminationOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审批意见不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证审批意见
            departmentLevelThreeExaminationOpinion:{
                content:[
                    // departmentLevelThreeExaminationOpinion
                    {
                        rule: /\S/,
                        msg:"审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审批意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
   
    // 指定办理类型委托单
    departmentServdepartmenttrustsaveEntrustedById:{
        url:'/departmentServ/department/trust/saveEntrustedById',
        proofRule:{
            // 内容摘要
            summary:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审批意见不符合验证"
                    }
                ],
                mustFill:true
            },
            // 委托事项
            entrustedMatters:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,200}$/,
                        msg:"审批意见不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证备注
            remarks:{
                content:[
                    {
                        rule: /\S/,
                        msg:"备注不应为空"    
                    },
                    {
                        // ^1[345678]\d{9}$
                        rule:/^.{1,100}$/,
                        msg:"备注不符合验证"
                    }
                ],
                mustFill:true
            },
               
        }
    },
    // 收文
    centerServcenterincomingMessagedispose:{
        url:'/centerServ/center/incomingMessage/dispose',
        proofRule:{
            // 验证装备中心编号
            centerNumber:{
                content:[
                    {
                        rule: /\S/,
                        msg:"装备中心编号不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\d]{1,10}$/,
                        msg:"装备中心编号不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证收文意见
            incomingMsgOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"收文意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"收文意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 收文处理单
    centerServcenterincomingMessageupdateReceiptForm:{
        url:'/centerServ/center/incomingMessage/updateReceiptForm',
        proofRule:{
            // 验证密级
            confidentialLevel:{
                content:[
                    {
                        rule: /\S/,
                        msg:"密级不应为空"    
                    },
                    {
                        rule:/^[0-9a-zA-Z]{1,9}$/,
                        msg:"密级不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证简述
            sketch:{
                content:[
                    {
                        rule: /\S/,
                        msg:"简述不应为空"    
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"简述不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证内容
            content:{
                content:[
                    {
                        rule: /\S/,
                        msg:"内容不应为空"    
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"内容不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证页数
            pages:{
                content:[
                    {
                        rule: /\S/,
                        msg:"内容不应为空"    
                    },
                    {
                        rule:/^[0-9]{1,3}$/,
                        msg:"内容不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },

    // 收文审批三级
    centerServcenterIncomingMessageApprovaldisposeApprovalUndertakeDepartment:{
        url:'/centerServ/center/IncomingMessageApproval/disposeApprovalUndertakeDepartment',
        proofRule:{
            // 验证意见
            reviewOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"意见不符合验证"
                    }
                ],
                mustFill:true
            },
            
        }
    },
    // 现场考核--现在计划管理一
    centerServcenterassessTimeupdateAssessTimeDetal:{
        url:'/centerServ/center/assessTime/updateAssessTimeDetal',
        proofRule:{
            // 验证修改备注
            remarks:{
                content:[
                    {
                        rule: /\S/,
                        msg:"备注不应为空"    
                    },
                    {
                        rule:/^.{1,20}$/,
                        msg:"备注不符合验证"
                    }
                ],
                mustFill:true
            },
            // 审查性质总结描述
            examineNatur:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审查性质总结描述不应为空"    
                    },
                    {
                        // ^1[345678]\d{9}$
                        rule:/^.{1,30}$/,
                        msg:"审查性质总结描述不符合验证"
                    }
                ],
                mustFill:true
            },
        }
    },
    // 现场考核--现在计划管理一编辑备注
    centerServcenterassessTimesaveOrUpdateSceneCheckPlacAddremark:{
        url:'/centerServ/center/assessTime/saveOrUpdateSceneCheckPlacAddremark',
        proofRule:{
            remarkJson:{
                // 验证修改备注
                content:[
                    {
                        rule: /\S/,
                        msg:"备注不应为空"    
                    },
                    {
                        rule:/^.{1,20}$/,
                        msg:"备注不符合验证"
                    }
                ],
                mustFill:true
            }
        }
        
    },
    // 资料审核
    centerServcenterdatumExaminesaveDatumExamineById:{
        url:'/centerServ/center/datumExamine/saveDatumExamineById',
        proofRule:{
            // 以下到审查资料之间的接口是/centerServ/center/ChangeItem/CenterChangeItemHistoryEdit
            //企业名称
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"企业名称不应为空"    
                    },
                    {
                        rule:/^.{1,20}$/,
                        msg:"企业名称不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证备注
            changeRemarks:{
                content:[
                    {
                        rule: /\S/,
                        msg:"备注不应为空"    
                    },
                    {
                        // ^1[345678]\d{9}$
                        rule:/^.{1,30}$/,
                        msg:"备注不符合验证"
                    }
                ],
                mustFill:true
            },
            // 注册地址
            paramData:{
                // 验证生产地址
                address:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"注册地址不应为空"    
                        },
                        {
                            rule:/^.{1,50}$/,
                            msg:"注册地址不符合验证"
                        }
                        
                    ],
                    mustFill:true
                },
                // 股东名称
                shareholderName:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股东名称不应为空"    
                        },
                        {
                            rule:/^.{1,50}$/,
                            msg:"股东名称不符合验证"
                        }
                        
                    ],
                    mustFill:true
                },
                // 资本性质
                capitalNature:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"资本性质不应为空"    
                        },
                        {
                            rule:/^.{1,10}$/,
                            msg:"资本性质不符合验证"
                        }
                        
                    ],
                    mustFill:true
                },
                // 股比
                ownershipRatio:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股比不应为空"    
                        },
                        {
                            rule:/^(\d|[1-9]\d|100)(\.\d{1,2})?%$/,
                            msg:"股比不符合验证"
                        }
                        
                    ],
                    mustFill:true
                },
            },
            //法定代表人
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"法定代表人不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                        msg:"法定代表人不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            //注册资金
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"注册资金不应为空"    
                    },
                    {
                        rule:/^[1-9]{1,8}$/,
                        msg:"注册资金不符合验证"
                    }
                ],
                mustFill:true
            },
            //公司类型
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"公司类型不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"公司类型不符合验证"
                    }
                ],
                mustFill:true
            },
            //产能
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"产能不应为空"    
                    },
                    {
                        rule:/^\d+(\.\d+)?$/,
                        msg:"产能不符合验证"
                    }
                ],
                mustFill:true
            },
            //产能数据来源
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"产能数据来源不应为空"    
                    },
                    {
                        rule:/^.{1,20}$/,
                        msg:"产能数据来源不符合验证"
                    }
                ],
                mustFill:true
            },
            //审查资料
            examineWithDatum:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审查资料不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审查资料不符合验证"
                    }
                ],
                mustFill:true
            },
            //审查要点描述
            datumExamineDescription:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审查要点描述不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审查要点描述不符合验证"
                    }
                ],
                mustFill:true
            },
            //审查结果意见
            datumExamineOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审查结果意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审查结果意见不符合验证"
                    }
                ],
                mustFill:true
            },
        }
    },
    // 资料审核--维护生产地址和商标
    centerServcenterChangeItemCenterChangeItemHistoryEdit:{
        url:'/centerServ/center/ChangeItem/CenterChangeItemHistoryEdit',
        proofRule:{
            paramData:{
                // 生产地址 
                address:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"分公司不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"分公司不符合验证"
                        }
                    ],
                    mustFill:true
                },
                formOne:{
                    // 分公司
                    subFactoryName:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"分公司不应为空" 
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"分公司不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 生产厂
                    factoryName:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"生产厂不应为空" 
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"生产厂不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 负责人
                    contactPeople:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"负责人不应为空" 
                            },
                            {
                                rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                                msg:"负责人不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 电话
                    contactNumber:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"电话不应为空" 
                            },
                            {
                                rule:/^((0\d{2,3}-\d{7,8})|(1[35894]\d{9}))$/,
                                msg:"电话不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 传真
                    factoryFax:{
                        content:[    
                            {
                                rule: /\S/,
                                msg:"传真不应为空" 
                            },
                            {
                                rule:/^(\d{3,4}-)?\d{7,8}$/,
                                msg:"传真不符合验证"
                            }
                        ],
                        mustFill:true
                    }
                },
                formThree:{
                    // 建成产能
                    buildCapacity:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"建成产能不应为空" 
                            },
                            {
                                rule:/^\d+(\.\d+)?$/,
                                msg:"建成产能不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 新能源汽车专用产能
                    newEnergyVehicle:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"新能源汽车专用产能不应为空" 
                            },
                            {
                                rule:/^\d+(\.\d+)?$/,
                                msg:"新能源汽车专用产能不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 与传统燃油汽车共线的新能源汽车产能
                    gasolineVehicleCapacity:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"与传统燃油汽车共线的新能源汽车产能不应为空" 
                            },
                            {
                                rule:/^\d+(\.\d+)?$/,
                                msg:"与传统燃油汽车共线的新能源汽车产能不符合验证"
                            }
                        ] ,
                        mustFill:true
                    }
                },
                formFour:{
                    // 产品商标
                    tradeMark:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"产品商标不应为空" 
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"产品商标不符合验证"
                            }
                        ],
                        mustFill:true
                    }
                }
            }
        }
    },
    // 项目说明会
    centerServcenterexplainsaveExplainInfoById:{
        url:'/centerServ/center/explain/saveExplainInfoById',
        proofRule:{
            // 装备中心参加人员
            centerJoinPerson:{
                content:[
                    {
                        rule: /\S/,
                        msg:"装备中心参加人员不应为空"    
                    },
                    {
                        rule:/^([a-zA-Z\u4e00-\u9fa5·s]+[,|，])*[a-zA-Z\u4e00-\u9fa5·s]+$/,
                        msg:"装备中心参加人员不符合验证"
                    }
                ],
                mustFill:true
            },
            //申请企业参加人员 
            accessEnterpriseJoinPerson:{
                content:[
                    {
                        rule: /\S/,
                        msg:"申请企业参加人员不应为空"    
                    },
                    {
                        rule:/^([a-zA-Z\u4e00-\u9fa5·s]+[,|，])*[a-zA-Z\u4e00-\u9fa5·s]+$/,
                        msg:"申请企业参加人员不符合验证"
                    }
                ],
                mustFill:true
            },
            //企业说明的主要内容
            masterContent:{
                content:[
                    {
                        rule: /\S/,
                        msg:"企业说明的主要内容不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"企业说明的主要内容不符合验证"
                    }
                ],
                mustFill:true
            },
            //企业补充提供的材料
            supplementMaterials:{
                content:[
                    {
                        rule: /\S/,
                        msg:"企业补充提供的材料不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"企业补充提供的材料不符合验证"
                    }
                ],
                mustFill:true
            },
            //问题描述
            questionDescription:{
                content:[
                    {
                        rule: /\S/,
                        msg:"问题描述不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"问题描述不符合验证"
                    }
                ],
                mustFill:true
            },
            //处理意见
            opinionDescription:{
                content:[
                    {
                        rule: /\S/,
                        msg:"处理意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"处理意见不符合验证"
                    }
                ],
                mustFill:true
            },
            //后续处理情况
            followUpSituation:{
                content:[
                    {
                        rule: /\S/,
                        msg:"后续处理情况不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"后续处理情况不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 报告生成
    centerServcenterreportssaveReportsInfoById:{
        url:'/centerServ/center/reports/saveReportsInfoById',
        proofRule:{
            // 装备中心编号（填入）
            number:{
                content:[
                    {
                        rule: /\S/,
                        msg:"装备中心编号不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\d]{1,5}$/,
                        msg:"装备中心编号不符合验证"
                    }
                ],
                mustFill:true
            },
            // 简化审查的报告
            equipDepartmentProjectDescription:{
                content:[
                    {
                        rule: /\S/,
                        msg:"简化审查的报告不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"简化审查的报告不符合验证"
                    }
                ],
                mustFill:true
            },
            equipmentCenterNumber:{
                content:[
                    {
                        rule: /\S/,
                        msg:"装备中心编号不应为空"    
                    },
                    {
                        rule:/^[a-zA-z\d]{1,5}$/,
                        msg:"装备中心编号不符合验证"
                    }
                ],
                mustFill:true
            }, //企业名称
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"企业名称不应为空"    
                    },
                    {
                        rule:/^.{1,20}$/,
                        msg:"企业名称不符合验证"
                    }
                ],
                mustFill:true
            },
            // 验证备注
            changeRemarks:{
                content:[
                    {
                        rule: /\S/,
                        msg:"备注不应为空"    
                    },
                    {
                        // ^1[345678]\d{9}$
                        rule:/^.{1,30}$/,
                        msg:"备注不符合验证"
                    }
                ],
                mustFill:true
            },
            //法定代表人
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"法定代表人不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                        msg:"法定代表人不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            //注册资金
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"注册资金不应为空"    
                    },
                    {
                        rule:/^[1-9]{1,8}$/,
                        msg:"注册资金不符合验证"
                    }
                ],
                mustFill:true
            },
            //公司类型
            // centerServ/center/ChangeItem/CenterChangeItemHistoryEdit
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"公司类型不应为空"    
                    },
                    {
                        rule:/^.{1,20}$/,
                        msg:"公司类型不符合验证"
                    }
                ],
                mustFill:true
            },
            //产能
            // /centerServ/center/ChangeItem/CenterChangeItemHistoryEdit
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"产能不应为空"    
                    },
                    {
                        rule:/^\d+(\.\d+)?$/,
                        msg:"产能不符合验证"
                    }
                ],
                mustFill:true
            },
            //产能数据来源
            // /centerServ/center/ChangeItem/CenterChangeItemHistoryEdit
            changeItemAfterName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"产能数据来源不应为空"    
                    },
                    {
                        rule:/^.{1,20}$/,
                        msg:"产能数据来源不符合验证"
                    }
                ],
                mustFill:true
            },
            // 附件
            adjunctDescription:{
                content:[
                    {
                        rule: /\S/,
                        msg:"附件不应为空"    
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"附件不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
     // 报告生成--编辑股东、股权
     centerServcenterChangeItemCenterChangeItemHistoryEdit:{
        url:'/centerServ/center/ChangeItem/CenterChangeItemHistoryEdit',
        proofRule:{
            paramData:{
                //股东(名称)
                shareholderName:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股东不应为空"    
                        },
                        {
                            rule:/^.{1,50}$/,
                            msg:"股东不符合验证"
                        }
                        
                    ],
                    mustFill:true
                },
                //资本性质
                capitalNature:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"资本性质不应为空"    
                        },
                        {
                            rule:/^.{1,10}$/,
                            msg:"资本性质不符合验证"
                        }
                    ],
                    mustFill:true
                },
                //股比
                ownershipRatio:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股比不应为空"    
                        },
                        {
                            rule:/^(\d|[1-9]\d|100)(\.\d{1,2})?%$/,
                            msg:"股比不符合验证"
                        }
                    ],
                    mustFill:true
                },
            }
        }
    },
    // 报告生成--填写生产厂信息
    centerServcenterChangeItemCenterChangeItemHistoryEdit:{
        url:'/centerServ/center/ChangeItem/CenterChangeItemHistoryEdit',
        proofRule:{
            paramData:{
                formOne:{
                    // 分公司名称
                    subFactoryName:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"分公司名称不应为空"    
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"分公司名称不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 生产厂名称
                    factoryName:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"生产厂名称名称不应为空"    
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"生产厂名称名称不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 负责人
                    contactPeople:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"负责人名称不应为空"    
                            },
                            {
                                rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                                msg:"负责人名称不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 电话
                    contactNumber:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"电话名称不应为空"    
                            },
                            {
                                rule:/^((0\d{2,3}-\d{7,8})|(1[35894]\d{9}))$/,
                                msg:"电话名称不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    // 传真
                    factoryFax:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"传真名称不应为空"    
                            },
                            {
                                rule:/^(\d{3,4}-)?\d{7,8}$/,
                                msg:"传真名称不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                },
                formFour:{
                    // 商标名称
                    tradeMark:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"商标名称名称不应为空"    
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"商标名称名称不符合验证"
                            }
                        ],
                        mustFill:true
                    }
                }
            }
        }
    },
    // 报告审批一
    centerServcenterreportssaveReportExamineById:{
        url:'/centerServ/center/reports/saveReportExamineById',
        proofRule:{
            // 综合管理部意见
            levelOneExamineOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"综合管理部意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"综合管理部意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 报告审批二
    centerServcenterreportssaveReportExamineById:{
        url:'/centerServ/center/reports/saveReportExamineById',
        proofRule:{
            // 审核部意见
            levelTwoExamineOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审核部意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审核部意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 报告审批三
    centerServcenterreportssaveReportExamineById:{
        url:'/centerServ/center/reports/saveReportExamineById',
        proofRule:{
            // 中机中心部意见
            levelThreeExamineOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"中机中心部意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"中机中心部意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
      // 发文管理--发文审批单创建
    centerServcenterreleaseApprovalsaveReleaseApproval:{
        url:'/centerServ/center/releaseApproval/saveReleaseApproval',
        proofRule:{
            // 发往单位
            sendDepartment:{
                content:[
                    {
                        rule: /\S/,
                        msg:"发往单位不应为空" 
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"发往单位不符合验证"
                    }
                ],
                mustFill:true
            },
            // 文件编号
            fileNumber:{
                content:[
                    {
                        rule: /\S/,
                        msg:"文件编号不应为空" 
                    },
                    {
                        rule:/^[a-zA-Z\d]{2,8}$/,
                        msg:"文件编号不符合验证"
                    }
                ],
                mustFill:true
            },
            // 文件名称或正文内容
            fileContent:{
                content:[
                    {
                        rule: /\S/,
                        msg:"文件名称或正文内容不应为空" 
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"文件名称或正文内容不符合验证"
                    }
                ],
                mustFill:true
            },
            // 附件
            accessory:{
                content:[
                    {
                        rule: /\S/,
                        msg:"附件不应为空" 
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"附件不符合验证"
                    }
                ],
                mustFill:true
            },
            // 主报（主送）
            leadingNewspapers:{
                content:[
                    {
                        rule: /\S/,
                        msg:"主报不应为空" 
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5]{2,8}$/,
                        msg:"主报不符合验证"
                    }
                ],
                mustFill:true
            },
            // 抄报（抄送）
            superQuote:{
                content:[
                    {
                        rule: /\S/,
                        msg:"抄报不应为空" 
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5]{2,8}$/,
                        msg:"抄报不符合验证"
                    }
                ],
                mustFill:true
            },
        }
    },
    // 发文审批单审批一
    centerServcenterreleaseApprovalupdateReleaseApprovalDepartmentOpinion:{
        url:'/centerServ/center/releaseApproval/updateReleaseApprovalDepartmentOpinion',
        proofRule:{
            // 部门负责人意见
            departmentOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"部门负责人意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"部门负责人意见不符合验证"
                    }
                ],
                mustFill:true
            },
        }
    },
    // 发文审批单审批二
    centerServcenterreleaseApprovalupdateReleaseApprovalNuclearDrafOpinion:{
        url:'/centerServ/center/releaseApproval/updateReleaseApprovalNuclearDrafOpinion',
        proofRule:{
            // 综合部门核稿人意见
            nuclearDraf:{
                content:[
                    {
                        rule: /\S/,
                        msg:"综合部门核稿人意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"综合部门核稿人意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 发文审批单审批三
    centerServcenterreleaseApprovalupdateReleaseApprovalCenterLeaderOpinio:{
        url:'/centerServ/center/releaseApproval/updateReleaseApprovalCenterLeaderOpinio',
        proofRule:{
            // 中心领导签发意见
            centerLeaderSign:{
                content:[
                    {
                        rule: /\S/,
                        msg:"中心领导签发意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"中心领导签发意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 归档--编辑收文处理单
    centerServcenterreleaseApprovalupdateIncoming:{
        url:'/centerServ/center/releaseApproval/updateIncoming',
        proofRule:{
            // 密级
            securityClassification:{
                content:[
                    {
                        rule: /\S/,
                        msg:"密级不应为空"    
                    },
                    {
                        rule:/^[a-zA-z\d]{2,8}$/,
                        msg:"密级不符合验证"
                    }
                ],
                mustFill:true
            },
            // 发文编号
            dispatchNumber:{
                content:[
                    {
                        rule: /\S/,
                        msg:"发文编号不应为空"    
                    },
                    {
                        rule:/^[a-zA-z\d]{2,8}$/,
                        msg:"发文编号不符合验证"
                    }
                ],
                mustFill:true
            },
            //领导审批意见
            leaderOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"领导审批意见不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"领导审批意见不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 归档--简化报告
    centerServcenterreleaseApprovalupdateSimplifiedReports:{
        url:'/centerServ/center/releaseApproval/updateSimplifiedReports',
        proofRule:{
            // 装备中心编号
            number:{
                content:[
                    {
                        rule: /\S/,
                        msg:"装备中心编号不应为空"    
                    },
                    {
                        rule:/^[a-zA-z\d]{2,8}$/,
                        msg:"装备中心编号不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 归档--发文审批单
    centerServcenterreleaseApprovalupdateFileNumber:{
        url:'/centerServ/center/releaseApproval/updateFileNumber',
        proofRule:{
            // 文件编号
            fileNumber:{
                content:[
                    {
                        rule: /\S/,
                        msg:"文件编号不应为空"    
                    },
                    {
                        rule:/^[a-zA-z\d]{2,8}$/,
                        msg:"文件编号不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 公示管理--未完成的准入事项申请--编辑
    centerServpublicitysavePublicityEdit:{
        url:'/centerServ/publicity/savePublicityEdit',
        proofRule:{
            // 备注
            comment:{
                content:[
                    {
                        rule: /\S/,
                        msg:"备注不应为空"    
                    },
                    {
                        rule:/^.{1,50}$/,
                        msg:"备注不符合验证"
                    }
                ],
                mustFill:true
            },
            // 公示列表中的企业名
            companyName:{
                content:[
                    {
                        rule: /\S/,
                        msg:"公示列表中的企业名不应为空"
                    },
                    {
                        rule:/^.{2,20}$/,
                        msg:"公示列表中的企业名不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 公示管理--批次审批--审批
    departmentServdepartmentequipaddPublicityResultAndOpinion:{
        url:'/departmentServ/department/equip/addPublicityResultAndOpinion',
        proofRule:{
            parmJson:{
                // 意见备注
                opinionComment:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"意见备注不应为空"    
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"意见备注不符合验证"
                        }
                    ],
                    mustFill:true
                },
            }
        }
    },
    // 录入公告批次--准入录入结果（按钮）
    centerServcenterassessSignupdateAssessNoticeList:{
        url:'/centerServ/center/assessSign/updateAssessNoticeList',
        proofRule:{
            // 批次号
            noticeJson:{
                noticeBatchName:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"批次号不应为空"    
                        },
                        {
                            rule:/^[0-9]{2,8}$/,
                            msg:"批次号不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
        }
    },
    // 数据同步确认二
    centerServcenterdatasyncupdateTwoDataSync:{
        url:'/centerServ/center/datasync/updateTwoDataSync',
        proofRule:{
            // 意见描述
            twoDataOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"意见描述不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"意见描述不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 数据同步确认三
    centerServcenterdatasyncupdateThreeDataSync:{
        url:'/centerServ/center/datasync/updateThreeDataSync',
        proofRule:{
            // 意见描述
            threeDataOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"批次号不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"批次号不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 企业基本信息维护部
    noticeenterpriseenterpriseBasicapplyUpdate:{
        url:'/notice/enterprise/enterpriseBasic/applyUpdate',
        proofRule:{
            // 注册资金
            reg_fund:{
                content:[
                    {
                        rule: /\S/,
                        msg:"注册资金不应为空"    
                    },
                    {
                        rule:/^[1-9]{1,8}$/,
                        msg:"注册资金不符合验证"
                    }
                ],
                mustFill:true
            },
            // 隶属集团
            bloc_name:{
                content:[
                    {
                        rule: /\S/,
                        msg:"隶属集团不应为空"    
                    },
                    {
                        rule:/^([0-9a-zA-Z\u4e00-\u9fa5]+[;|；])*[a-zA-Z\u4e00-\u9fa5]+$/,
                        msg:"隶属集团不符合验证"
                    }
                ],
                mustFill:true
            },
            enterprise_shareholder:{
                // 验证股东
                name:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股东名称不应为空"    
                        },
                        {
                            rule:/^.{1,50}$/,
                            msg:"股东名称不符合验证"
                        }
                        
                    ],
                    mustFill:true
                },
                // 验证股比
                optionList:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股比不应为空"    
                        },
                        {
                            rule:/^(\d|[1-9]\d|100)(\.\d{1,2})?%$/,
                            msg:"股比不符合验证"
                        }
                        
                    ],
                    mustFill:true
                },
            },
            // 统一社会信用代码
            credit_code:{
                content:[
                    {
                        rule: /\S/,
                        msg:"统一社会信用代码不应为空"    
                    },
                    {
                        rule:/^([159Y]{1})([1239]{1})([0-9ABCDEFGHJKLMNPQRTUWXY]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-90-9ABCDEFGHJKLMNPQRTUWXY])$/,
                        msg:"统一社会信用代码不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 联系地址
            contact_address:{
                content:[
                    {
                        rule: /\S/,
                        msg:"联系地址不应为空"    
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"联系地址不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 邮政编码
            mail_encoding:{
                content:[
                    {
                        rule: /\S/,
                        msg:"邮政编码不应为空"    
                    },
                    {
                        rule:/^[0-9]{6}$/,
                        msg:"邮政编码不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 联系人
            contact_name:{
                content:[
                    {
                        rule: /\S/,
                        msg:"联系人不应为空"    
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                        msg:"联系人不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 联系人职务
            contact_duty:{
                content:[
                    {
                        rule: /\S/,
                        msg:"联系人职务不应为空"    
                    },
                    {
                        rule:/^.{1,10}$/,
                        msg:"联系人职务不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 联系人电话
            contact_phone:{
                content:[
                    {
                        rule: /\S/,
                        msg:"联系人电话不应为空"    
                    },
                    {
                        rule:/^((0\d{2,3}-\d{7,8})|(1[35894]\d{9}))$/,
                        msg:"联系人电话不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 传真
            contact_fax:{
                content:[
                    {
                        rule: /\S/,
                        msg:"传真不应为空"    
                    },
                    {
                        rule:/^(\d{3,4}-)?\d{7,8}$/,
                        msg:"传真不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 企业网址
            enterprise_url:{
                content:[
                    {
                        rule: /\S/,
                        msg:"企业网址不应为空"    
                    },
                    {
                        rule:/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/|www\.)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,
                        msg:"企业网址不符合验证"
                    }
                    
                ],
                mustFill:true
            },
            // 电子邮箱
            email:{
                content:[
                    {
                    rule: /\S/,
                    msg:"电子邮箱不应为空" 
                    },
                    {
                        rule:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    msg:"电子邮箱不符合验证"
                    }
                ],
                mustFill:true
            }, 
        }
    },



    // 企业准入端--企业申请文件
    noticeenterprisecenterChangeItemCenterChangeItemHistoryEdit:{
        url:'/notice/enterprise/center/ChangeItem/CenterChangeItemHistoryEdit',
         //股东变更
         proofRule:{
            paramData:{
                // 股东
                shareholderName:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股东不应为空"    
                        },
                        {
                            rule:/^.{1,50}$/,
                            msg:"股东不符合验证"
                        }
                    ],
                    mustFill:true
                }, 
                // 股比
                ownershipRatio:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"股比不应为空"    
                        },
                        {
                            rule:/^(\d|[1-9]\d|100)(\.\d{1,2})?%$/,
                            msg:"股比不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
         }
    },
    // 企业准入端--企业申请文件
    noticeenterpriseitemReportedupdateEnterpriseAccessHistory:{
        url:'/notice/enterprise/itemReported/updateEnterpriseAccessHistory',
            proofRule:{
                // 装备中心编号
                day:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"装备中心编号不应为空"    
                        },
                        {
                            rule:/^[a-zA-Z\d]$ /,
                            msg:"装备中心编号不符合验证"
                        }
                    ],
                    mustFill:true
                }, 
                // 签发人
                signer:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"签发人不应为空"    
                        },
                        {
                            rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                            msg:"签发人不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 年产车
                vehicleType:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"年产车不应为空"    
                        },
                        {
                            rule:/^[a-zA-Z\u4e00-\u9fff]$/,
                            msg:"年产车不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 车量
                vehicleNum:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"生产数量不应为空"    
                        },
                        {
                            rule:/^[0-9]{1,5}$/,
                            msg:"生产数量不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 时间
                deadlineDate:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"时间不应为空"    
                        },
                        {
                            rule:/^[0-9]{1,4}$ /,
                            msg:"时间不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 公司总资产
                totalAssets:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"公司总资产不应为空"    
                        },
                        {
                            rule:/^[0-9]{1,8}$/,
                            msg:"公司总资产不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 净资产
                netAsset:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"净资产不应为空"    
                        },
                        {
                            rule:/^[0-9]{1,8}$ /,
                            msg:"净资产不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 营业收入
                revenue:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"营业收入不应为空"    
                        },
                        {
                            rule:/^[0-9]{1,8}$/,
                            msg:"营业收入不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 企业名称变更
                changeName:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更名称不应为空"    
                        },
                        {
                            rule:/^.{1,20}$/,
                            msg:"变更名称不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 变更日期
                changeNameDate:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更日期不应为空"    
                        },
                        {
                            rule:/^[0-9]{1,4}$/,
                            msg:"变更日期不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 变更文件名
                fileName:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更文件名不应为空"    
                        },
                        {
                            rule:/^.{1,20}$ /,
                            msg:"变更文件名不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 变更文件号
                fileNum:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更文件号不应为空"    
                        },
                        {
                            rule:/^[a-zA-Z0-9]{1,10}$ /,
                            msg:"变更文件号不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 变更股东及具体描述
                changeShareholderDescribe:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更股东及具体描述不应为空"    
                        },
                        {
                            rule:/^.{1,100}$ /,
                            msg:"变更股东及具体描述不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 变更股东批准时间
                changeShareholder:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更股东批准时间不应为空"    
                        },
                        {
                            rule:/^[0-9]{1,4}$/,
                            msg:"变更股东批准时间不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 变更股东文件名
                fileNameShareholder:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更股东文件名不应为空"    
                        },
                        {
                            rule:/^.{1,20}$ /,
                            msg:"变更股东文件名不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 变更股东文件号
                fileNumShareholder:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"变更股东文件号不应为空"    
                        },
                        {
                            rule:/^[a-zA-Z0-9]{1,10}$ /,
                            msg:"变更股东文件号不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 企业投资项目按相关手续办理情况说明，及项目完成情况
                productType:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"企业投资项目按相关手续办理情况说明，及项目完成情况不应为空"    
                        },
                        {
                            rule:/^.{1,10}$/,
                            msg:"企业投资项目按相关手续办理情况说明，及项目完成情况不符合验证"
                        }
                    ],
                    mustFill:true
                },
                //兼并重组协议描述说明
                mergerDescribe:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"兼并重组协议描述说明不应为空"    
                        },
                        {
                            rule:/^.{1,100}$ /,
                            msg:"兼并重组协议描述说明不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 借用集团的能力条件说明
                abilityDescribe:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"借用集团的能力条件说明不应为空"    
                        },
                        {
                            rule:/^.{1,100}$ /,
                            msg:"借用集团的能力条件说明不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
    },

    //--------------------------------------------现场考核-----------------------------------------------
    // 现场考核--考核计划审批一
    centerServcenterassessBatchupdateOneResultAndOpinion:{
        url:'/centerServ/center/assessBatch/updateOneResultAndOpinion',
        proofRule:{
            parameJson:{
                // 意见备注
                centerLevelOneApprovalOpinion:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"意见备注不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"意见备注不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
        }
    },
    // 现场考核--考核计划审批二
    centerServcenterassessBatchupdateTwoResultAndOpinion:{
        url:'/centerServ/center/assessBatch/updateTwoResultAndOpinion',
        proofRule:{
            parameJson:{
                // 意见备注
                centerLevelTwoApprovalOpinion:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"意见备注不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"意见备注不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
        }
    },
    // 《现场考核计划》审批一
    departmentServdepartmentequipupdateOneResultAndOpinion:{
        url:'/departmentServ/department/equip/updateOneResultAndOpinion',
        proofRule:{
            parmJson:{
                // 意见备注
                departmentLevelOneApprovalOpinion:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"意见备注不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"意见备注不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
        }
    },
    // 《现场考核计划》审批二
    departmentServdepartmentequipupdateTwoResultAndOpinion:{
        url:'/departmentServ/department/equip/updateTwoResultAndOpinion',
        proofRule:{
            parmJson:{
                // 意见备注
                departmentLevelTwoApprovalOpinion:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"意见备注不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"意见备注不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
        }
    },
    //编制下发审查通知（生成现场考核通知）
    centerServcenterassessInforminformEditSave:{
        url:'/centerServ/center/assessInform/informEditSave',
        proofRule:{
            // 联系电话
            contactPhone:{
                content:[
                    {
                        rule: /\S/,
                        msg:"联系电话不应为空" 
                    },
                    {
                        rule:/^((0\d{2,3}-\d{7,8})|(1[35894]\d{9}))$/,
                        msg:"联系电话不符合验证"
                    }
                ],
                mustFill:true
            },
            // 传真
            fax:{
                content:[
                    {
                        rule: /\S/,
                        msg:"传真不应为空" 
                    },
                    {
                        rule:/^(\d{3,4}-)?\d{7,8}$/,
                        msg:"传真不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
// --------------------------------------------------技委会讨论-----------------------------------------------------------
    //制定技委会计划--上会资料
    centerServtoolexaminedataEntryListadopt:{
        url:'/centerServ/tool/examine/dataEntryList/adopt',
        proofRule:{
            // 企业基本情况
            entryEnterpriseBasicSituation:{
                content:[
                    {
                        rule: /\S/,
                        msg:"企业基本情况不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"企业基本情况不符合验证"
                    }
                ],
                mustFill:true
            },
            // 整改验收
            acceptanceOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"整改验收不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"整改验收不符合验证"
                    }
                ],
                mustFill:true
            },
            // 审查组推荐意见/整改验收意见
            examineLeaderOpinionDetail:{
                content:[
                    {
                        rule: /\S/,
                        msg:"审查组推荐意见/整改验收意见不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"审查组推荐意见/整改验收意见不符合验证"
                    }
                ],
                mustFill:true
            },
            // 中心审查意见
            entryApprovalOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"中心审查意见不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"中心审查意见不符合验证"
                    }
                ],
                mustFill:true
            }

        }
    },
    //制定技委会计划--上会资料
    centerServtoolexaminedataEntryListproblemSave:{
        url:'/centerServ/tool/examine/dataEntryList/problemSave',
        proofRule:{
            // 条款项
            problemClauseNumber:{
                content:[
                    {
                        rule: /\S/,
                        msg:"条款项不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"条款项不符合验证"
                    }
                ],
                mustFill:true
            },
            // 具体描述
            problemDescribe:{
                content:[
                    {
                        rule: /\S/,
                        msg:"具体描述不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"具体描述不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 生成技委会计划--生成《技委会汇报项目明细表》
    centerServtoolexamineprojectNotAggregatedbatchCreateOrUpdate:{
        url:'/centerServ/tool/examine/projectNotAggregated/batchCreateOrUpdate',
        proofRule:{
            // 会议议题
            meetingSubject:{
                content:[
                    {
                        rule: /\S/,
                        msg:"会议议题不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"会议议题不符合验证"
                    }
                ],
                mustFill:true
            },
            // 主持人
            compere:{
                content:[
                    {
                        rule: /\S/,
                        msg:"主持人不应为空" 
                    },
                    {
                        rule:/^[a-zA-Z\u4E00-\u9FA5·s]{2,20}$/,
                        msg:"主持人不符合验证"
                    }
                ],
                mustFill:true
            },
            // 地点
            address:{
                content:[
                    {
                        rule: /\S/,
                        msg:"地点不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"地点不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 技委会计划审批一      
    centerServtoolexaminebatchExamine1adopt:{
        url:'/centerServ/tool/examine/batchExamine1/adopt',
        proofRule:{
            // 意见备注
            mngOneApprovalOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"意见备注不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"意见备注不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 技委会计划审批二     
    centerServtoolexaminebatchExamine2adopt:{
        url:'/centerServ/tool/examine/batchExamine2/adopt',
        proofRule:{
            // 意见备注
            mngTwoApprovalOpinion:{
                content:[
                    {
                        rule: /\S/,
                        msg:"意见备注不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"意见备注不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 技委会成员建议  
    centerServtoolexaminebatchExamine3adopt:{
        url:'/centerServ/tool/examine/batchExamine3/adopt',
        proofRule:{
            // 技委会成员建议
            memberSuggestDescription:{
                content:[
                    {
                        rule: /\S/,
                        msg:"技委会成员建议不应为空" 
                    },
                    {
                        rule:/^.{1,100}$/,
                        msg:"技委会成员建议不符合验证"
                    }
                ],
                mustFill:true
            }
        }
    },
    // 技委会结果审批  
    centerServcentertechnologyCommitresultupdateTechnologyCommitResultDetail:{
        url:'/centerServ/center/technologyCommit/result/updateTechnologyCommitResultDetail',
        proofRule:{
            paramJson:{
                // 意见详情
                leaderOpinionDetail:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"意见详情不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"意见详情不符合验证"
                        }
                    ],
                    mustFill:true
                }
            }
        }
    },
  //-------------------------------------------------------------------------签报生成-------------------------------------------------------------------
    centerServcenterassessSignupdateAssessSignDetalVo:{
        url:'/centerServ/center/assessSign/updateAssessSignDetalVo',
        proofRule:{
            paramJson:{
                // 编号
                number:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"编号不应为空" 
                        },
                        {
                            rule:/^[a-zA-Z\d]{1,8}$/,
                            msg:"编号不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 工信和信息化部装备工作司报告
                equipDepartment:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"工信和信息化部装备工作司报告不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"工信和信息化部装备工作司报告不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 审查依据
                examineGist:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"审查依据不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"审查依据不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 申请事项其他细节描述
                accessDetail:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"申请事项其他细节描述不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"申请事项其他细节描述不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 项目概述
                projectOverview:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"项目概述不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"项目概述不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 现场审查情况
                sceneEexamineTitle:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"现场审查情况不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"现场审查情况不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 现场审查情况内容
                sceneExamineContent:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"现场审查情况内容不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"现场审查情况内容不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 装备中心推荐意见
                recommendedConditionsTitle:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"装备中心推荐意见不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"装备中心推荐意见不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 装备中心推荐意见内容
                recommendedConditionsContent:{
                    content:[
                        {
                            rule: /\S/,
                            msg:"装备中心推荐意见内容不应为空" 
                        },
                        {
                            rule:/^.{1,100}$/,
                            msg:"装备中心推荐意见内容不符合验证"
                        }
                    ],
                    mustFill:true
                },
                // 添加栏目
                signRemarkJson:{
                    //标题zxx
                    remarkTitle:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"标题不应为空" 
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"标题不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                    //内容
                    remarkDescribe:{
                        content:[
                            {
                                rule: /\S/,
                                msg:"内容不应为空" 
                            },
                            {
                                rule:/^.{1,100}$/,
                                msg:"内容不符合验证"
                            }
                        ],
                        mustFill:true
                    },
                }
            }
        }
    },
        
    
}