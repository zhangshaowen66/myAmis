import schema2component from "../../../utils/schema2component";

// id: 1,
// name: '张三',
// age: 18,
// tel: '13111011101',
// gender: 1,
// company: 'XX XX XX'

const schema = {
    type: 'page',
    title: '会员列表',
    subTitle: '展示基本的增删改查',
    body: {
        type: "crud",
        // draggable: true,
        api: "https://houtai.baidu.com/api/sample?perPage=5",
        filter: {
            title: "",
            submitText: "",
            controls: [
                {
                    type: "text",
                    name: "keywords",
                    placeholder: "通过关键字搜索",
                    addOn: {
                        label: "搜索",
                        type: "submit"
                    }
                }
            ]
        },
        // bulkActions: [
        //     {
        //         label: "批量删除",
        //         actionType: "ajax",
        //         api: "delete:/api/customer/${ids|raw}",
        //         confirmText: "确定要批量删除?"
        //     },
        //     {
        //         label: "批量修改",
        //         actionType: "dialog",
        //         dialog: {
        //             title: "批量编辑",
        //             body: {
        //                 type: "form",
        //                 api: "/api/customer/bulkUpdate2",
        //                 controls: [
        //                     {
        //                         type: 'hidden',
        //                         name: 'ids'
        //                     },
        //                     {
        //                         type: "text",
        //                         name: "engine",
        //                         label: "Engine"
        //                     }
        //                 ]
        //             }
        //         }
        //     }
        // ],
        columns: [
            {
                name: "id",
                label: "ID",

            },

            {
                "type": "operation",
                label: "姓名",
                body:  "<span>1233</span>"
            },

            {
                name: "age",
                label: "年龄",
            },

            {
                name: "gender",
                label: "性别",
                type: 'mapping',
                map: {
                    1: '♂',
                    '*': '♀'
                }
            },

            {
                name: 'tel',
                label: '电话'
            },

            {
                name: 'company',
                label: '所属公司'
            },
            
            {
                type: "operation",
                label: "操作",
                width: 100,
                buttons: [
                    {
                        type: "button",
                        icon: "fa fa-eye",
                        tooltip: "查看"
                    },
                    {
                        type: "button",
                        icon: "fa fa-pencil",
                        tooltip: "编辑"
                    },
                    {
                        type: "button",
                        icon: "fa fa-times text-danger",
                        actionType: "ajax",
                        tooltip: "删除",
                        confirmText: "您确认要删除?",
                        api: "delete:/api/sample/$id"
                    }
                ],
                toggled: true
            }
        ]
    }
};

export default schema2component(schema);