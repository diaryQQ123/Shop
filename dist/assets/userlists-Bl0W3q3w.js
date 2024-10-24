import{u as L,a as j,b as D,c as I,d as O}from"./requests-BJ8Q--BS.js";import{f as w,g as F,c as T,a,w as o,b as V,r as s,o as G,d as m}from"./index-BrkTj9za.js";const H=(v,l)=>{const b=v.__vccOpts||v;for(const[g,d]of l)b[g]=d;return b},J={class:"content"},K={class:"input_box"},M={class:"dialog-footer"},Q={class:"dialog-footer"},R={__name:"userlists",setup(v){const l=w({keyword:"",searchParams:{query:"",pagesize:5,pagenum:1},userlist:[],dialogFormVisible:!1,formdata:{username:"",password:"",email:"",mobile:""},total:0,formdata1:{id:"",email:"",mobile:""},dialogFormVisible1:!1}),b=F(),g=F(),d=()=>{L(l.searchParams).then(r=>{r.data&&(l.total=r.data.total,l.userlist=r.data.users)})};d();const c=()=>{l.dialogFormVisible=!0},k=w({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度应该为3-10",trigger:"blur"}],password:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度应该为3-10",trigger:"blur"}],email:[{required:!1,message:"请输入正确的邮箱格式",pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,trigger:"blur"}],mobile:[{required:!1,message:"请输入正确的手机号码",trigger:"blur",pattern:/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/}]}),U=w({email:[{required:!1,message:"请输入正确的邮箱格式",pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,trigger:"blur"}],mobile:[{required:!1,message:"请输入正确的手机号码",trigger:"blur",pattern:/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/}]}),z=r=>{r.validate(e=>{if(e)j(l.formdata).then(u=>{u.data&&(l.dialogFormVisible=!1,l.formdata={username:"",password:"",email:"",mobile:""},d())});else return})},x=r=>{D(r).then(e=>{e.data&&d()})},$=r=>{l.dialogFormVisible1=!0,l.formdata1.email=r.email,l.formdata1.mobile=r.mobile,l.formdata1.id=r.id},q=r=>{r.validate(e=>{if(e)I(l.formdata1).then(u=>{u.data&&(l.dialogFormVisible1=!1,l.formdata1={email:"",mobile:""},d())});else return})},P=r=>{O(r).then(e=>{e.meta&&d()})};return(r,e)=>{const u=s("el-breadcrumb-item"),A=s("el-breadcrumb"),Z=s("Search"),S=s("el-icon"),i=s("el-button"),n=s("el-input"),p=s("el-table-column"),B=s("el-switch"),N=s("el-table"),E=s("el-pagination"),f=s("el-form-item"),y=s("el-form"),C=s("el-dialog");return G(),T("div",null,[a(A,null,{default:o(()=>[a(u,{to:{path:"/user"}},{default:o(()=>e[15]||(e[15]=[m("首页")])),_:1}),a(u,{to:{path:"/user"},class:"title"},{default:o(()=>e[16]||(e[16]=[m("用户列表")])),_:1})]),_:1}),V("div",J,[V("div",K,[a(n,{modelValue:l.searchParams.query,"onUpdate:modelValue":e[0]||(e[0]=t=>l.searchParams.query=t),style:{"max-width":"600px"},placeholder:"搜索关键字",class:"input-with-select"},{append:o(()=>[a(i,{type:"primary",onClick:d},{default:o(()=>[a(S,null,{default:o(()=>[a(Z)]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(i,{type:"primary",class:"button",onClick:c},{default:o(()=>e[17]||(e[17]=[m("新建用户")])),_:1})]),a(N,{data:l.userlist,style:{width:"100%"}},{default:o(()=>[a(p,{prop:"username",label:"姓名",width:"180"}),a(p,{prop:"email",label:"邮箱",width:"180"}),a(p,{prop:"mobile",label:"电话"}),a(p,{prop:"role_name",label:"角色"}),a(p,{prop:"mg_state",label:"状态"},{default:o(t=>[a(B,{modelValue:t.row.mg_state,"onUpdate:modelValue":_=>t.row.mg_state=_,onChange:_=>x(t.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(p,{label:"操作"},{default:o(t=>[a(i,{type:"primary",onClick:_=>$(t.row)},{default:o(()=>e[18]||(e[18]=[m("编辑")])),_:2},1032,["onClick"]),a(i,{type:"danger",onClick:_=>P(t.row)},{default:o(()=>e[19]||(e[19]=[m("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),a(E,{"current-page":l.searchParams.pagenum,"onUpdate:currentPage":e[1]||(e[1]=t=>l.searchParams.pagenum=t),"page-size":l.searchParams.pagesize,"onUpdate:pageSize":e[2]||(e[2]=t=>l.searchParams.pagesize=t),"page-sizes":[5,10],layout:"total, sizes, prev, pager, next, jumper",total:l.total,onSizeChange:d,onCurrentChange:d},null,8,["current-page","page-size","total"]),a(C,{modelValue:l.dialogFormVisible,"onUpdate:modelValue":e[9]||(e[9]=t=>l.dialogFormVisible=t),title:"新增用户",width:"500"},{footer:o(()=>[V("div",M,[a(i,{onClick:e[7]||(e[7]=t=>l.dialogFormVisible=!1)},{default:o(()=>e[20]||(e[20]=[m("取消")])),_:1}),a(i,{type:"primary",onClick:e[8]||(e[8]=t=>z(b.value))},{default:o(()=>e[21]||(e[21]=[m("确定")])),_:1})])]),default:o(()=>[a(y,{model:l.formdata,rules:k,ref_key:"userForm",ref:b},{default:o(()=>[a(f,{label:"用户名",prop:"username"},{default:o(()=>[a(n,{modelValue:l.formdata.username,"onUpdate:modelValue":e[3]||(e[3]=t=>l.formdata.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(f,{label:"用户密码",prop:"password"},{default:o(()=>[a(n,{modelValue:l.formdata.password,"onUpdate:modelValue":e[4]||(e[4]=t=>l.formdata.password=t),type:"password",placeholder:"请输入用户密码"},null,8,["modelValue"])]),_:1}),a(f,{label:"用户邮箱",prop:"email"},{default:o(()=>[a(n,{modelValue:l.formdata.email,"onUpdate:modelValue":e[5]||(e[5]=t=>l.formdata.email=t),placeholder:"请输入用户邮箱"},null,8,["modelValue"])]),_:1}),a(f,{label:"手机号",prop:"mobile"},{default:o(()=>[a(n,{modelValue:l.formdata.mobile,"onUpdate:modelValue":e[6]||(e[6]=t=>l.formdata.mobile=t),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),a(C,{modelValue:l.dialogFormVisible1,"onUpdate:modelValue":e[14]||(e[14]=t=>l.dialogFormVisible1=t),title:"新增用户",width:"500"},{footer:o(()=>[V("div",Q,[a(i,{onClick:e[12]||(e[12]=t=>l.dialogFormVisible=!1)},{default:o(()=>e[22]||(e[22]=[m("取消")])),_:1}),a(i,{type:"primary",onClick:e[13]||(e[13]=t=>q(g.value))},{default:o(()=>e[23]||(e[23]=[m("确定")])),_:1})])]),default:o(()=>[a(y,{model:l.formdata1,rules:U,ref_key:"userForm1",ref:g},{default:o(()=>[a(f,{label:"用户邮箱",prop:"email"},{default:o(()=>[a(n,{modelValue:l.formdata1.email,"onUpdate:modelValue":e[10]||(e[10]=t=>l.formdata1.email=t),placeholder:"请输入用户邮箱"},null,8,["modelValue"])]),_:1}),a(f,{label:"手机号",prop:"mobile"},{default:o(()=>[a(n,{modelValue:l.formdata1.mobile,"onUpdate:modelValue":e[11]||(e[11]=t=>l.formdata1.mobile=t),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])])}}},Y=H(R,[["__scopeId","data-v-b7ec8a62"]]);export{Y as default};