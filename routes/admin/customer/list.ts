import schema2component from "../../../utils/schema2component";
import { Breadcrumb, Button } from 'antd';
const title = `<div class="wb100">
    <div  class="clcc">
        <span>首页</span>
        <span>/</span>
        <span >客户池</span>
        <span>/</span>
        <span class="cl33">客户列表</span>
    </div>
    
    <div class="disFlex mt-15">
        <h2>客户列表</h2>
        <span class="disFlex">
            <ul>
                <li class="clcc">日新增</li>
                <li class="text-c">677</li>
            </ul>
            <span class="my15" style="height: 15px; width: 1px; background: #CCCCCC"></span>
            <ul>
                <li class="clcc">日沟通客户</li>
                <li class="text-c">677</li>
            </ul>
       
    </div>
</div>`

const schema = {
    type: 'page',
    body: [
        {
            "type": "card",
            "body": {
                "type": "html",
                className: "wb100",
                "html": title,
            },
        },
        {
            type: "crud",
            className: "bgff borN",
            // draggable: true,
            api: "https://houtai.baidu.com/api/sample?perPage=20",
            "headerToolbar": [],
            "footerToolbar": [
                "switch-per-page",
                "pagination"
            ],

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
    }]
};

export default schema2component(schema);