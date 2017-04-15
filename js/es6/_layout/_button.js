export default class Button{
    constructor($target,addClassName){
        this.$target = $target;
        this.addClassName = addClassName;
    }

    init(){
        this.$target.on('mousedown',this,this.buttonMouseDown);
        $(window).on('mouseup',this,this.buttonMouseUp)
    }

    buttonMouseDown(e){
        let _this = e.data;
        $(this).addClass(_this.addClassName)
    }

    buttonMouseUp(e){
        let _this = e.data;
        $(_this.$target).removeClass(_this.addClassName)
    }
}