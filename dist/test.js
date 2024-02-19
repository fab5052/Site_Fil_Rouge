"use strict";
exports.__esModule = true;
var react_18_2_0_1 = require("https://esm.sh/react@18.2.0");
var classnames_2_3_2_1 = require("https://cdn.skypack.dev/classnames@2.3.2");
var react_dom_18_2_0_1 = require("https://esm.sh/react-dom@18.2.0");
function Demo() {
    var _a, _b;
    var _c = react_18_2_0_1.useState(false), switched = _c[0], setSwitched = _c[1];
    return className = "local-container" >
        className;
    {
        classnames_2_3_2_1["default"]('demo', { 's--switched': switched });
    }
     >
        className;
    "demo__inner" >
        className;
    "demo__forms" >
        className;
    "demo__form" >
        className;
    "demo__form-content" >
        heading;
    "Welcome back";
    fields = (_a = {}, _a['email', 'password'] = , _a);
    submitLabel = "Sign in"
        /  >
        /div>
        < /div>
        < div;
    className = "demo__form" >
        className;
    "demo__form-content" >
        heading;
    "Time to feel like home";
    fields = (_b = {}, _b['name', 'email', 'password'] = , _b);
    submitLabel = "Sign up"
        /  >
        /div>
        < /div>
        < /div>
        < div;
    className = "demo__switcher" >
        className;
    "demo__switcher-inner" >
        className;
    "demo__switcher-content" >
        className;
    "demo__switcher-text" >
        New;
    here ? /h3>
        < p >
        Sign : ;
    up;
    and;
    discover;
    great;
    amount;
    of;
    new opportunities
        < /p>
        < /div>
        < div >
        One;
    of;
    us ? /h3>
        < p >
        If : ;
    you;
    already;
    has;
    an;
    account, just;
    sign in .We & apos;
    ve;
    missed;
    you
        < /p>
        < /div>
        < /div>
        < button;
    className = "demo__switcher-btn";
    onClick = {}();
    setSwitched(!switched);
}
    >
        className;
"animated-border" /  >
    className;
"demo__switcher-btn-inner" >
    Sign;
Up < /span>
    < span > Sign;
In < /span>
    < /span>
    < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
;
function FakeForm(_a) {
    var heading = _a.heading, fields = _a.fields, submitLabel = _a.submitLabel;
    return className = "form";
    onSubmit = {}(e);
    e.preventDefault();
}
 >
    className;
"form__heading" > { heading: heading } < /div>;
{
    fields.map(function (field) { return className = "form__field"; }, key = { field: field } >
        className, "form__field-label" > { field: field } < /span>
        < input, className = "form__field-input", type = { field: field } /  >
        /label>);
}
type;
"submit";
className = "form__submit" >
    { submitLabel: submitLabel }
    < /button>
    < /form>;
;
react_dom_18_2_0_1["default"].render(/>, document.querySelector('#demo')););
