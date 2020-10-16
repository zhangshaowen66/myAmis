import schema2component from "../../utils/schema2component";


const schema = {
    type: 'page',
    title: '客户管理',
    "body": {
        "type": "service",
        "api": "https://houtai.baidu.com/api/sample?perPage=5",
        "body": [
            {
                "type": "table",
                "source": "$rows",
                "columns": [
                    {
                        "name": "engine",
                        "label": "客户（企业/机构）",

                    },
                    {
                        "name": "version",
                        "label": "对接负责人",
                    },
                    {
                        "name": "version",
                        "label": "客户经理"
                    },
                    {
                        "name": "version",
                        "label": "合同使用/到期情况"
                    },
                    {
                        "name": "status",
                        "label": "状态",
                        type: 'mapping',
                        map: {
                            'true': "<span >漂亮</span>",
                            'false': "<span >开心</span>",
                        }
                    },
                    {
                        "name": "version",
                        "label": "操作"
                    }
                ]
            }
        ]
    }
};

export default schema2component(schema);