AFRAME.registerComponent("car",{
    schema:{
        x:{type:"number", default:-10},
        y:{type:"number", default:50},
        z:{type:"number", default:50},
        rotateY:{type:"number", default:-100}    
    }, 
    tick:function(){
        window.addEventListener("click", (e) => {   
            this.data.rotateY +=0.05;
        });
        const rotation = {x:0, y:this.data.rotateY, z:0}
        this.el.setAttribute("rotation",rotation)
        var pos = this.data
        this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z})
    }
})