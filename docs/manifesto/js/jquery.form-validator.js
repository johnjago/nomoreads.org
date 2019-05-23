!function(e){"use strict";var t=e(window),a=function(t){if(t.valAttr("error-msg-container"))return e(t.valAttr("error-msg-container"));var a=t.parent();if(!a.hasClass("form-group")){var r=a.closest(".form-group");if(r.length)return r.eq(0)}return a},r=function(e,t){e.addClass(t.errorElementClass).removeClass("valid"),a(e).addClass(t.inputParentClassOnError).removeClass(t.inputParentClassOnSuccess),""!==t.borderColorOnError&&e.css("border-color",t.borderColorOnError)},n=function(t,r){t.each(function(){var t=e(this);i(t,"",r,r.errorMessagePosition),t.removeClass("valid").removeClass(r.errorElementClass).css("border-color",""),a(t).removeClass(r.inputParentClassOnError).removeClass(r.inputParentClassOnSuccess).find("."+r.errorMessageClass).remove()})},i=function(r,n,i,s){var o=document.getElementById(r.attr("name")+"_err_msg"),l=function(e){t.trigger("validationErrorDisplay",[r,e]),e.html(n)};if(o)l(e(o));else if("object"==typeof s){var d=!1;if(s.find("."+i.errorMessageClass).each(function(){if(this.inputReferer==r[0])return d=e(this),!1}),d)n?l(d):d.remove();else l(u=e('<div class="'+i.errorMessageClass+'"></div>')),u[0].inputReferer=r[0],s.prepend(u)}else{var u,c=a(r);0==(u=c.find("."+i.errorMessageClass+".help-block")).length&&(u=e("<span></span>").addClass("help-block").addClass(i.errorMessageClass)).appendTo(c),l(u)}},s=function(t,a,r,n){var i,s=n.errorMessageTemplate.messages.replace(/\{errorTitle\}/g,a),o=[];e.each(r,function(e,t){o.push(n.errorMessageTemplate.field.replace(/\{msg\}/g,t))}),s=s.replace(/\{fields\}/g,o.join("")),i=(i=n.errorMessageTemplate.container.replace(/\{errorMessageClass\}/g,n.errorMessageClass)).replace(/\{messages\}/g,s),t.children().eq(0).before(i)};e.fn.validateOnBlur=function(t,a){return this.find("*[data-validation]").bind("blur.validation",function(){e(this).validateInputOnBlur(t,a,!0,"blur")}),a.validateCheckboxRadioOnClick&&this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation",function(){e(this).validateInputOnBlur(t,a,!0,"click")}),this},e.fn.validateOnEvent=function(t,a){return this.find("*[data-validation-event]").each(function(){var r=e(this),n=r.valAttr("event");n&&r.unbind(n+".validation").bind(n+".validation",function(){e(this).validateInputOnBlur(t,a,!0,n)})}),this},e.fn.showHelpOnFocus=function(t){return t||(t="data-validation-help"),this.find(".has-help-txt").valAttr("has-keyup-event",!1).removeClass("has-help-txt"),this.find("textarea,input").each(function(){var a=e(this),r="jquery_form_help_"+(a.attr("name")||"").replace(/(:|\.|\[|\])/g,""),n=a.attr(t);n&&a.addClass("has-help-txt").unbind("focus.help").bind("focus.help",function(){var t=a.parent().find("."+r);0==t.length&&(t=e("<span />").addClass(r).addClass("help").addClass("help-block").text(n).hide(),a.after(t)),t.fadeIn()}).unbind("blur.help").bind("blur.help",function(){e(this).parent().find("."+r).fadeOut("slow")})}),this},e.fn.validateInputOnBlur=function(t,s,o,l){if(e.formUtils.eventType=l,(this.valAttr("suggestion-nr")||this.valAttr("postpone")||this.hasClass("hasDatepicker"))&&!window.postponedValidation){var d=this,u=this.valAttr("postpone")||200;return window.postponedValidation=function(){d.validateInputOnBlur(t,s,o,l),window.postponedValidation=!1},setTimeout(function(){window.postponedValidation&&window.postponedValidation()},u),this}t=e.extend({},e.formUtils.LANG,t||{}),n(this,s);var c=this.closest("form"),g=(this.attr(s.validationRuleAttribute),e.formUtils.validateInput(this,t,s,c,l));return g.isValid?g.shouldChangeDisplay&&(this.addClass("valid"),a(this).addClass(s.inputParentClassOnSuccess)):g.isValid||(r(this,s),i(this,g.errorMsg,s,s.errorMessagePosition),o&&this.unbind("keyup.validation").bind("keyup.validation",function(){e(this).validateInputOnBlur(t,s,!1,"keyup")})),this},e.fn.valAttr=function(e,t){return void 0===t?this.attr("data-validation-"+e):!1===t||null===t?this.removeAttr("data-validation-"+e):(e.length>0&&(e="-"+e),this.attr("data-validation"+e,t))},e.fn.isValid=function(o,l,d){if(e.formUtils.isLoadingModules){var u=this;return setTimeout(function(){u.isValid(o,l,d)},200),null}l=e.extend({},e.formUtils.defaultConfig(),l||{}),o=e.extend({},e.formUtils.LANG,o||{}),d=!1!==d,e.formUtils.errorDisplayPreventedWhenHalted&&(delete e.formUtils.errorDisplayPreventedWhenHalted,d=!1),e.formUtils.isValidatingEntireForm=!0,e.formUtils.haltValidation=!1;var c=function(t,a){e.inArray(t,f)<0&&f.push(t),h.push(a),a.attr("current-error",t),d&&r(a,l)},g=[],f=[],h=[],m=this;if(d&&(m.find("."+l.errorMessageClass+".alert").remove(),n(m.find("."+l.errorElementClass+",.valid"),l)),m.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function(){var t,r,n=e(this),i=n.attr("type"),s="radio"==i||"checkbox"==i,d=n.attr("name");if(t=d,!("submit"===(r=i)||"button"===r||"reset"==r||e.inArray(t,l.ignore||[])>-1)&&(!s||e.inArray(d,g)<0)){s&&g.push(d);var u=e.formUtils.validateInput(n,o,l,m,"submit");u.shouldChangeDisplay&&(u.isValid?u.isValid&&(n.valAttr("current-error",!1).addClass("valid"),a(n).addClass(l.inputParentClassOnSuccess)):c(u.errorMsg,n))}}),"function"==typeof l.onValidate){var v=l.onValidate(m);e.isArray(v)?e.each(v,function(e,t){c(t.message,t.element)}):v&&v.element&&v.message&&c(v.message,v.element)}return e.formUtils.isValidatingEntireForm=!1,!e.formUtils.haltValidation&&h.length>0?(d&&("top"===l.errorMessagePosition?s(m,o.errorTitle,f,l):"custom"===l.errorMessagePosition?"function"==typeof l.errorMessageCustom&&l.errorMessageCustom(m,o.errorTitle,f,l):e.each(h,function(e,t){i(t,t.attr("current-error"),l,l.errorMessagePosition)}),l.scrollToTopOnError&&t.scrollTop(m.offset().top-20)),!1):(!d&&e.formUtils.haltValidation&&(e.formUtils.errorDisplayPreventedWhenHalted=!0),!e.formUtils.haltValidation)},e.fn.validateForm=function(e,t){return window.console&&"function"==typeof window.console.warn&&window.console.warn("Use of deprecated function $.validateForm, use $.isValid instead"),this.isValid(e,t,!0)},e.fn.restrictLength=function(t){return new e.formUtils.lengthRestriction(this,t),this},e.fn.addSuggestions=function(t){var a=!1;return this.find("input").each(function(){var r=e(this);(a=e.split(r.attr("data-suggestions"))).length>0&&!r.hasClass("has-suggestions")&&(e.formUtils.suggest(r,a,t),r.addClass("has-suggestions"))}),this},e.split=function(t,a){if("function"!=typeof a){if(!t)return[];var r=[];return e.each(t.split(a||/[,|\-\s]\s*/g),function(t,a){(a=e.trim(a)).length&&r.push(a)}),r}t&&e.each(t.split(/[,|\-\s]\s*/g),function(t,r){if((r=e.trim(r)).length)return a(r,t)})},e.validate=function(a){var r=e.extend(e.formUtils.defaultConfig(),{form:"form",validateOnEvent:!1,validateOnBlur:!0,validateCheckboxRadioOnClick:!0,showHelpOnFocus:!0,addSuggestions:!0,modules:"",onModulesLoaded:null,language:!1,onSuccess:!1,onError:!1,onElementValidate:!1});if((a=e.extend(r,a||{})).lang&&"en"!=a.lang){var i="lang/"+a.lang+".js";a.modules+=a.modules.length?","+i:i}e(a.form).each(function(r,i){var s=e(i);t.trigger("formValidationSetup",[s,a]),s.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"),s.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"),s.bind("submit.validation",function(){var t=e(this);if(e.formUtils.haltValidation)return!1;if(e.formUtils.isLoadingModules)return setTimeout(function(){t.trigger("submit.validation")},200),!1;var r=t.isValid(a.language,a);return!e.formUtils.haltValidation&&(r&&"function"==typeof a.onSuccess?!1!==a.onSuccess(t)&&void 0:r||"function"!=typeof a.onError?r:(a.onError(t),!1))}).bind("reset.validation",function(){e(this).find("."+a.errorMessageClass+".alert").remove(),n(e(this).find("."+a.errorElementClass+",.valid"),a)}).addClass("has-validation-callback"),a.showHelpOnFocus&&s.showHelpOnFocus(),a.addSuggestions&&s.addSuggestions(),a.validateOnBlur&&(s.validateOnBlur(a.language,a),s.bind("html5ValidationAttrsFound",function(){s.validateOnBlur(a.language,a)})),a.validateOnEvent&&s.validateOnEvent(a.language,a)}),""!=a.modules&&e.formUtils.loadModules(a.modules,!1,function(){"function"==typeof a.onModulesLoaded&&a.onModulesLoaded(),t.trigger("validatorsLoaded",["string"==typeof a.form?e(a.form):a.form,a])})},e.formUtils={defaultConfig:function(){return{ignore:[],errorElementClass:"error",borderColorOnError:"#b94a48",errorMessageClass:"form-error",validationRuleAttribute:"data-validation",validationErrorMsgAttribute:"data-validation-error-msg",errorMessagePosition:"element",errorMessageTemplate:{container:'<div class="{errorMessageClass} alert alert-danger">{messages}</div>',messages:"<strong>{errorTitle}</strong><ul>{fields}</ul>",field:"<li>{msg}</li>"},errorMessageCustom:s,scrollToTopOnError:!0,dateFormat:"yyyy-mm-dd",addValidClassOnAll:!1,decimalSeparator:".",inputParentClassOnError:"has-error",inputParentClassOnSuccess:"has-success"}},validators:{},_events:{load:[],valid:[],invalid:[]},haltValidation:!1,isValidatingEntireForm:!1,addValidator:function(e){var t=0===e.name.indexOf("validate_")?e.name:"validate_"+e.name;void 0===e.validateOnKeyUp&&(e.validateOnKeyUp=!0),this.validators[t]=e},isLoadingModules:!1,loadedModules:{},loadModules:function(a,r,n){if(void 0===n&&(n=!0),e.formUtils.isLoadingModules)setTimeout(function(){e.formUtils.loadModules(a,r,n)});else{var i=!1,s=function(a,r){var s=e.split(a),o=s.length,l=function(){0==--o&&(e.formUtils.isLoadingModules=!1,n&&i&&("function"==typeof n?n():t.trigger("validatorsLoaded")))};o>0&&(e.formUtils.isLoadingModules=!0);var d="?_="+(new Date).getTime(),u=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.each(s,function(t,a){if(0==(a=e.trim(a)).length)l();else{var n=r+a+(".js"==a.slice(-3)?"":".js"),s=document.createElement("SCRIPT");n in e.formUtils.loadedModules?l():(e.formUtils.loadedModules[n]=1,i=!0,s.type="text/javascript",s.onload=l,s.src=n+(".dev.js"==n.slice(-7)?d:""),s.onerror=function(){"console"in window&&window.console.log&&window.console.log("Unable to load form validation module "+n)},s.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(l(),this.onload=null,this.onreadystatechange=null)},u.appendChild(s))}})};if(r)s(a,r);else{var o=function(){var t=!1;return e('script[src*="form-validator"]').each(function(){return"/"==(t=this.src.substr(0,this.src.lastIndexOf("/"))+"/")&&(t=""),!1}),!1!==t&&(s(a,t),!0)};o()||e(o)}}},validateInput:function(t,a,r,n,i){t.trigger("beforeValidation");var s=t.val()||"",o={isValid:!0,shouldChangeDisplay:!0,errorMsg:""},l=t.valAttr("optional"),d=!1,u=!1,c=t.valAttr("if-checked");if(t.attr("disabled"))return o.shouldChangeDisplay=!1,o;if(null!=c&&(d=!0,n.find('input[name="'+c+'"]').prop("checked")&&(u=!0)),!s&&"true"===l||d&&!u)return o.shouldChangeDisplay=r.addValidClassOnAll,o;var g=t.attr(r.validationRuleAttribute),f=!0;return g?(e.split(g,function(o){0!==o.indexOf("validate_")&&(o="validate_"+o);var l=e.formUtils.validators[o];if(!l||"function"!=typeof l.validatorFunction)throw new Error('Using undefined validator "'+o+'"');"validate_checkbox_group"==o&&(t=n.find("[name='"+t.attr("name")+"']:eq(0)"));var d=null;if(("keyup"!=i||l.validateOnKeyUp)&&(d=l.validatorFunction(s,t,r,a,n)),!d)return f=null,null!==d&&((f=t.attr(r.validationErrorMsgAttribute+"-"+o.replace("validate_","")))||(f=t.attr(r.validationErrorMsgAttribute))||(f=a[l.errorMessageKey])||(f=l.errorMessage)),!1}," "),"string"==typeof f?(t.trigger("validation",!1),o.errorMsg=f,o.isValid=!1,o.shouldChangeDisplay=!0):null===f?o.shouldChangeDisplay=r.addValidClassOnAll:(t.trigger("validation",!0),o.shouldChangeDisplay=!0),"function"==typeof r.onElementValidate&&null!==o&&r.onElementValidate(o.isValid,t,n,f),o):(o.shouldChangeDisplay=r.addValidClassOnAll,o)},parseDate:function(t,a){var r,n,i,s,o=a.replace(/[a-zA-Z]/gi,"").substring(0,1),l="^",d=a.split(o||null);if(e.each(d,function(e,t){l+=(e>0?"\\"+o:"")+"(\\d{"+t.length+"})"}),l+="$",null===(r=t.match(new RegExp(l))))return!1;var u=function(t,a,r){for(var n=0;n<a.length;n++)if(a[n].substring(0,1)===t)return e.formUtils.parseDateInt(r[n+1]);return-1};return i=u("m",d,r),n=u("d",d,r),s=u("y",d,r),!(2===i&&n>28&&(s%4!=0||s%100==0&&s%400!=0)||2===i&&n>29&&(s%4==0||s%100!=0&&s%400==0)||i>12||0===i)&&(!(this.isShortMonth(i)&&n>30||!this.isShortMonth(i)&&n>31||0===n)&&[s,i,n])},parseDateInt:function(e){return 0===e.indexOf("0")&&(e=e.replace("0","")),parseInt(e,10)},isShortMonth:function(e){return e%2==0&&e<7||e%2!=0&&e>7},lengthRestriction:function(t,a){var r=parseInt(a.text(),10),n=0,i=function(){var e=t.val().length;if(e>r){var i=t.scrollTop();t.val(t.val().substring(0,r)),t.scrollTop(i)}(n=r-e)<0&&(n=0),a.text(n)};e(t).bind("keydown keyup keypress focus blur",i).bind("cut paste",function(){setTimeout(i,100)}),e(document).bind("ready",i)},numericRangeCheck:function(t,a){var r=e.split(a),n=parseInt(a.substr(3),10);return 1==r.length&&-1==a.indexOf("min")&&-1==a.indexOf("max")&&(r=[a,a]),2==r.length&&(t<parseInt(r[0],10)||t>parseInt(r[1],10))?["out",r[0],r[1]]:0===a.indexOf("min")&&t<n?["min",n]:0===a.indexOf("max")&&t>n?["max",n]:["ok"]},_numSuggestionElements:0,_selectedSuggestion:null,_previousTypedVal:null,suggest:function(a,r,n){var i={css:{maxHeight:"150px",background:"#FFF",lineHeight:"150%",textDecoration:"underline",overflowX:"hidden",overflowY:"auto",border:"#CCC solid 1px",borderTop:"none",cursor:"pointer"},activeSuggestionCSS:{background:"#E9E9E9"}},s=function(e,t){var a=t.offset();e.css({width:t.outerWidth(),left:a.left+"px",top:a.top+t.outerHeight()+"px"})};n&&e.extend(i,n),i.css.position="absolute",i.css["z-index"]=9999,a.attr("autocomplete","off"),0===this._numSuggestionElements&&t.bind("resize",function(){e(".jquery-form-suggestions").each(function(){var t=e(this),a=t.attr("data-suggest-container");s(t,e(".suggestions-"+a).eq(0))})}),this._numSuggestionElements++;var o=function(t){var a=t.valAttr("suggestion-nr");e.formUtils._selectedSuggestion=null,e.formUtils._previousTypedVal=null,e(".jquery-form-suggestion-"+a).fadeOut("fast")};return a.data("suggestions",r).valAttr("suggestion-nr",this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest",function(){e(this).trigger("keyup"),e.formUtils._selectedSuggestion=null}).unbind("keyup.suggest").bind("keyup.suggest",function(){var t=e(this),r=[],n=e.trim(t.val()).toLocaleLowerCase();if(n!=e.formUtils._previousTypedVal){e.formUtils._previousTypedVal=n;var l=!1,d=t.valAttr("suggestion-nr"),u=e(".jquery-form-suggestion-"+d);if(u.scrollTop(0),""!=n){var c=n.length>2;e.each(t.data("suggestions"),function(e,t){var a=t.toLocaleLowerCase();if(a==n)return r.push("<strong>"+t+"</strong>"),l=!0,!1;(0===a.indexOf(n)||c&&a.indexOf(n)>-1)&&r.push(t.replace(new RegExp(n,"gi"),"<strong>$&</strong>"))})}l||0==r.length&&u.length>0?u.hide():r.length>0&&0==u.length?(u=e("<div></div>").css(i.css).appendTo("body"),a.addClass("suggestions-"+d),u.attr("data-suggest-container",d).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-"+d)):r.length>0&&!u.is(":visible")&&u.show(),r.length>0&&n.length!=r[0].length&&(s(u,t),u.html(""),e.each(r,function(a,r){e("<div></div>").append(r).css({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"5px"}).addClass("form-suggest-element").appendTo(u).click(function(){t.focus(),t.val(e(this).text()),o(t)})}))}}).unbind("keydown.validation").bind("keydown.validation",function(t){var a,r,n=t.keyCode?t.keyCode:t.which,s=e(this);if(13==n&&null!==e.formUtils._selectedSuggestion){if(a=s.valAttr("suggestion-nr"),(r=e(".jquery-form-suggestion-"+a)).length>0){var l=r.find("div").eq(e.formUtils._selectedSuggestion).text();s.val(l),o(s),t.preventDefault()}}else{a=s.valAttr("suggestion-nr");var d=(r=e(".jquery-form-suggestion-"+a)).children();if(d.length>0&&e.inArray(n,[38,40])>-1){38==n?(null===e.formUtils._selectedSuggestion?e.formUtils._selectedSuggestion=d.length-1:e.formUtils._selectedSuggestion--,e.formUtils._selectedSuggestion<0&&(e.formUtils._selectedSuggestion=d.length-1)):40==n&&(null===e.formUtils._selectedSuggestion?e.formUtils._selectedSuggestion=0:e.formUtils._selectedSuggestion++,e.formUtils._selectedSuggestion>d.length-1&&(e.formUtils._selectedSuggestion=0));var u=r.innerHeight(),c=r.scrollTop(),g=r.children().eq(0).outerHeight()*e.formUtils._selectedSuggestion;return(g<c||g>c+u)&&r.scrollTop(g),d.removeClass("active-suggestion").css("background","none").eq(e.formUtils._selectedSuggestion).addClass("active-suggestion").css(i.activeSuggestionCSS),t.preventDefault(),!1}}}).unbind("blur.suggest").bind("blur.suggest",function(){o(e(this))}),a},LANG:{errorTitle:"Form submission failed!",requiredFields:"You have not answered all required fields",badTime:"You have not given a correct time",badEmail:"You have not given a correct e-mail address",badTelephone:"You have not given a correct phone number",badSecurityAnswer:"You have not given a correct answer to the security question",badDate:"You have not given a correct date",lengthBadStart:"The input value must be between ",lengthBadEnd:" characters",lengthTooLongStart:"The input value is longer than ",lengthTooShortStart:"The input value is shorter than ",notConfirmed:"Input values could not be confirmed",badDomain:"Incorrect domain value",badUrl:"The input value is not a correct URL",badCustomVal:"The input value is incorrect",andSpaces:" and spaces ",badInt:"The input value was not a correct number",badSecurityNumber:"Your social security number was incorrect",badUKVatAnswer:"Incorrect UK VAT Number",badStrength:"The password isn't strong enough",badNumberOfSelectedOptionsStart:"You have to choose at least ",badNumberOfSelectedOptionsEnd:" answers",badAlphaNumeric:"The input value can only contain alphanumeric characters ",badAlphaNumericExtra:" and ",wrongFileSize:"The file you are trying to upload is too large (max %s)",wrongFileType:"Only files of type %s is allowed",groupCheckedRangeStart:"Please choose between ",groupCheckedTooFewStart:"Please choose at least ",groupCheckedTooManyStart:"Please choose a maximum of ",groupCheckedEnd:" item(s)",badCreditCard:"The credit card number is not correct",badCVV:"The CVV number was not correct",wrongFileDim:"Incorrect image dimensions,",imageTooTall:"the image can not be taller than",imageTooWide:"the image can not be wider than",imageTooSmall:"the image was too small",min:"min",max:"max",imageRatioNotAccepted:"Image ratio is not be accepted"}},e.formUtils.addValidator({name:"email",validatorFunction:function(t){var a=t.toLowerCase().split("@");return 2==a.length&&(e.formUtils.validators.validate_domain.validatorFunction(a[1])&&!/[^\w\+\.\-]/.test(a[0])&&a[0].length>0)},errorMessage:"",errorMessageKey:"badEmail"}),e.formUtils.addValidator({name:"domain",validatorFunction:function(e){return e.length>0&&e.length<=253&&!/[^a-zA-Z0-9]/.test(e.slice(-2))&&!/[^a-zA-Z0-9]/.test(e.substr(0,1))&&!/[^a-zA-Z0-9\.\-]/.test(e)&&1==e.split("..").length&&e.split(".").length>1},errorMessage:"",errorMessageKey:"badDomain"}),e.formUtils.addValidator({name:"required",validatorFunction:function(t,a,r,n,i){switch(a.attr("type")){case"checkbox":return a.is(":checked");case"radio":return i.find('input[name="'+a.attr("name")+'"]').filter(":checked").length>0;default:return""!==e.trim(t)}},errorMessage:"",errorMessageKey:"requiredFields"}),e.formUtils.addValidator({name:"length",validatorFunction:function(t,a,r,n){var i=a.valAttr("length"),s=a.attr("type");if(null==i)return alert('Please add attribute "data-validation-length" to '+a[0].nodeName+" named "+a.attr("name")),!0;var o,l="file"==s&&void 0!==a.get(0).files?a.get(0).files.length:t.length,d=e.formUtils.numericRangeCheck(l,i);switch(d[0]){case"out":this.errorMessage=n.lengthBadStart+i+n.lengthBadEnd,o=!1;break;case"min":this.errorMessage=n.lengthTooShortStart+d[1]+n.lengthBadEnd,o=!1;break;case"max":this.errorMessage=n.lengthTooLongStart+d[1]+n.lengthBadEnd,o=!1;break;default:o=!0}return o},errorMessage:"",errorMessageKey:""}),e.formUtils.addValidator({name:"url",validatorFunction:function(t){if(/^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)){var a=t.split("://")[1],r=a.indexOf("/");return r>-1&&(a=a.substr(0,r)),e.formUtils.validators.validate_domain.validatorFunction(a)}return!1},errorMessage:"",errorMessageKey:"badUrl"}),e.formUtils.addValidator({name:"number",validatorFunction:function(e,t,a){if(""!==e){var r,n,i=t.valAttr("allowing")||"",s=t.valAttr("decimal-separator")||a.decimalSeparator,o=!1,l=t.valAttr("step")||"",d=!1;if(-1==i.indexOf("number")&&(i+=",number"),-1==i.indexOf("negative")&&0===e.indexOf("-"))return!1;if(i.indexOf("range")>-1&&(r=parseFloat(i.substring(i.indexOf("[")+1,i.indexOf(";"))),n=parseFloat(i.substring(i.indexOf(";")+1,i.indexOf("]"))),o=!0),""!=l&&(d=!0),","==s){if(e.indexOf(".")>-1)return!1;e=e.replace(",",".")}if(i.indexOf("number")>-1&&""===e.replace(/[0-9-]/g,"")&&(!o||e>=r&&e<=n)&&(!d||e%l==0))return!0;if(i.indexOf("float")>-1&&null!==e.match(new RegExp("^([0-9-]+)\\.([0-9]+)$"))&&(!o||e>=r&&e<=n)&&(!d||e%l==0))return!0}return!1},errorMessage:"",errorMessageKey:"badInt"}),e.formUtils.addValidator({name:"alphanumeric",validatorFunction:function(t,a,r,n){var i=a.valAttr("allowing"),s="";if(i){s="^([a-zA-Z0-9"+i+"]+)$";var o=i.replace(/\\/g,"");o.indexOf(" ")>-1&&(o=o.replace(" ",""),o+=n.andSpaces||e.formUtils.LANG.andSpaces),this.errorMessage=n.badAlphaNumeric+n.badAlphaNumericExtra+o}else s="^([a-zA-Z0-9]+)$",this.errorMessage=n.badAlphaNumeric;return new RegExp(s).test(t)},errorMessage:"",errorMessageKey:""}),e.formUtils.addValidator({name:"custom",validatorFunction:function(e,t,a){return new RegExp(t.valAttr("regexp")).test(e)},errorMessage:"",errorMessageKey:"badCustomVal"}),e.formUtils.addValidator({name:"date",validatorFunction:function(t,a,r){var n=a.valAttr("format")||r.dateFormat||"yyyy-mm-dd";return!1!==e.formUtils.parseDate(t,n)},errorMessage:"",errorMessageKey:"badDate"}),e.formUtils.addValidator({name:"checkbox_group",validatorFunction:function(t,a,r,n,i){var s=!0,o=a.attr("name"),l=e("input[type=checkbox][name^='"+o+"']",i),d=l.filter(":checked").length,u=a.valAttr("qty");if(null==u){var c=a.get(0).nodeName;alert('Attribute "data-validation-qty" is missing from '+c+" named "+a.attr("name"))}var g=e.formUtils.numericRangeCheck(d,u);switch(g[0]){case"out":this.errorMessage=n.groupCheckedRangeStart+u+n.groupCheckedEnd,s=!1;break;case"min":this.errorMessage=n.groupCheckedTooFewStart+g[1]+n.groupCheckedEnd,s=!1;break;case"max":this.errorMessage=n.groupCheckedTooManyStart+g[1]+n.groupCheckedEnd,s=!1;break;default:s=!0}if(!s);return s}})}(jQuery);