/*
* @Author: 宏达
* @Date:   2017-10-10 15:33:38
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-21 22:29:58
*/
class Palette{
	constructor(canvas,ctx,mask){
		this.canvas=canvas;
		this.ctx=ctx;
		this.cw=this.canvas.width;
		this.ch=this.canvas.height;
		this.lineWidth=1;
		this.mask=mask;
		this.lineCap='butt';
		this.style='stroke';
		this.strokeStyle='none';
		this.fillStyle='none';
		this.temp=null;
		this.history=[];
	}
	init(){
		this.ctx.lineWidth=this.lineWidth;
		this.ctx.linecap=this.linecap;
		this.ctx.strokeStyle=this.strolestyle;
        this.ctx.fillStyle=this.fillstyle;
	}
    line(){
    	this.mask.onmousedown=function(e){
    		this.init();
    		let cx=e.offsetX,cy=e.offsetY;
    		this.mask.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
    			this.ctx.moveTo(cx, cy);
                this.ctx.lineTo(ox, oy);
                this.ctx.stroke();
                this.ctx[this.style]();
    		}.bind(this)
    		this.mask.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.mask.onmousemove=null;
    			this.mask.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    circle(){
    	this.mask.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.mask.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.fillStyle=this.fillStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
    			this.ctx.arc(cx, cy, r, 0, Math.PI*2);
    			this.ctx.stroke();
                this.ctx[this.style]();
    		}.bind(this)
    		this.mask.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.mask.onmousemove=null;
    			this.mask.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    poly(n){
    	this.mask.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.mask.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			let rad=Math.PI*2/n;
    			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.fillStyle=this.fillStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
    			this.ctx.moveTo(cx+r,cy);
                for(let i=0;i<n;i++){
                   let x=cx+r*Math.cos(rad*i);
                   let y=cy+r*Math.sin(rad*i);
                   this.ctx.lineTo(x,y);
                }
                this.ctx.closePath();
                this.ctx.stroke();
                this.ctx[this.style]();
    		}.bind(this)
    		this.mask.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.mask.onmousemove=null;
    			this.mask.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    polj(n){
    	this.mask.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.mask.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			let rad=Math.PI/n;
    			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.fillStyle=this.fillStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
                this.ctx.moveTo(cx+r,cy);
                for(let i=0;i<2*n;i++){
                   let r1;
                   r1=i%2==0 ? r:r/2;
                   let x=cx + r1 * Math.cos(rad*i);
                   let y=cy + r1 * Math.sin(rad*i);
                   this.ctx.lineTo(x,y);
                }
                this.ctx.closePath();
                this.ctx.stroke();
                this.ctx[this.style]();
    		}.bind(this)
    		this.mask.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.mask.onmousemove=null;
    			this.mask.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    square(){
    	this.mask.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.mask.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			let rad=Math.PI/2;
    			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.fillStyle=this.fillStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
    			this.ctx.moveTo(cx+r,cy);
                for(let i=0;i<4;i++){
                   let x=cx+r*Math.cos(rad*i);
                   let y=cy+r*Math.sin(rad*i);
                   this.ctx.lineTo(x,y);
                }
                this.ctx.closePath();
                this.ctx.stroke();
                this.ctx[this.style]();
    		}.bind(this)
    		this.mask.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.mask.onmousemove=null;
    			this.mask.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    dash(){
    	this.mask.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.mask.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.setLineDash([5,3]);
    			this.ctx.beginPath();
    			this.ctx.moveTo(cx, cy);
                this.ctx.lineTo(ox, oy);
                this.ctx.stroke();
                this.ctx[this.style]();
    		}.bind(this)
    		this.mask.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.ctx.setLineDash([0,0]);
    			this.mask.onmousemove=null;
    			this.mask.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    pencil(){
    	this.mask.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.ctx.beginPath();
    		this.ctx.moveTo(cx, cy);
    		this.mask.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
                this.ctx.lineTo(ox, oy);
                this.ctx.stroke();
                this.ctx[this.style]();
    		}.bind(this)
    		this.mask.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.mask.onmousemove=null;
    			this.mask.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    clips(){
    	if(!this.history.length){
            alert('已经撤销到最后一步了');
        }
        this.history.pop();
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.putImageData(this.history[this.history.length-1],0,0);
    }
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.history.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
    }
    xpc(xpc,w,h){
    	this.mask.onmousedown=function(e){
            xpc.style.display='block';
            xpc.style.left=`${e.offsetX-w/2}px`;
            xpc.style.top=`${e.offsetY-h/2}px`;
            this.mask.onmousemove=function(e){
                let cx=e.offsetX-w/2,cy=e.offsetY-h/2;
                let cw=e.offsetLeft,ch=e.offsetTop;
                if(cx>=cw-w){
                	cx=cw-w;
                }
                if(cx<=0){
                	cx=0;
                }
                if(cy>=ch-h){
                	cy=ch-h;
                }
                if(cy<=0){
                	cy=0;
                }
                xpc.style.left=`${cx}px`;
                xpc.style.top=`${cy}px`;
                this.ctx.clearRect(cx, cy, w, h);
            }.bind(this)
            this.mask.onmouseup=function(){
            	this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
            	xpc.style.display='none';
            	this.mask.onmousemove=null;
            	this.mask.onmouseup=null;
            }.bind(this)
    	}.bind(this)
    }
    font(){
    	let that=this;
    	let lefts=0,tops=0;
    	this.mask.onmousedown=function(e){
    		that.mask.onmousedown=null;
    		let cx=e.offsetX,cy=e.offsetY;
    		let divs=document.createElement('div');
    		divs.contentEditable=true;
    		divs.style.cssText=`
            width:100px;height=30px;border:1px dashed #ccc;position:absolute;left:${cx}px;top:${cy}px;cursor:move;
    		`;
    		this.appendChild(divs);
            divs.onmousedown=function(e){
            	let cx=e.clientX,cy=e.clientY;
            	let left=divs.offsetLeft,top=divs.offsetTop;
            	that.mask.onmousemove=function(e){
                    let ox=e.clientX,oy=e.clientY;
                    lefts=left+ox-cx;
                    tops=top+oy-cy;
                    if(lefts<=0){
                    	lefts=0;
                    }
                    if(lefts>=that.cw-100){
                    	lefts=that.cw-100;
                    }
                    if(tops<=0){
                    	tops=0;
                    }
                    if(tops>=that.ch-30){
                    	tops=that.ch-30;
                    }
                    divs.style.left=`${lefts}px`;
                    divs.style.top=`${tops}px`;
            	}
            	divs.onmouseup=function(){
            		that.mask.onmousemove=null;
            		this.onmouseup=null;
            	}
            }
    		divs.onblur=function(){
    			let value=that.innertext;
    			that.mask.removeChild(divs);
    			divs=null;
    			that.ctx.font='bold 20px sans-serif';
    			that.ctx.textAlign='center';
    			that.ctx.textBaseLine='middle';
    			that.ctx.fillText(value,lefts,tops);
    			that.history.push(that.ctx.getImageData(0,0,that.cw, that.ch));
    		}
    	}
    }
    clip(obj){
        let that=this;
        let minX,minY,w,h;
        this.mask.onmousedown=function(e){
            let cx=e.offsetX,cy=e.offsetY;
            e.preventDefault();
            obj.style.display='block';
            obj.style.width=0;
            obj.style.height=0;
            obj.style.width=`${cx}px`;
            obj.style.height=`${cy}px`;
            that.mask.onmousemove=function(e){
            	let ox=e.offsetX,oy=e.offsetY;
            	w=Math.abs(cx-ox);
            	h=Math.abs(cy-oy);
            	minX=ox>=cx?cx:ox;
            	minY=oy>=cy?cy:oy;
            	obj.style.left=`${minX}px`;
            	obj.style.top=`${minY}px`;
            	obj.style.width=`${w}px`;
            	obj.style.height=`${h}px`;
            }
            that.mask.onmouseup=function(){
            	that.temp=that.ctx.getImageData(minX,minY,w,h);
            	that.ctx.clearRect(minX, minY, w, h);
            	that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
            	that.ctx.putImageData(that.temp,minX,minY);
            	obj.style.display='none';
            	that.mask.onmousemove=null;
            	this.onmouseup=null;
            	that.drag(minX,minY,obj);
            }
        }
    }
     copy(obj){
        let that=this;
        let minX,minY,w,h;
        this.mask.onmousedown=function(e){
            let cx=e.offsetX,cy=e.offsetY;
            e.preventDefault();
            obj.style.display='block';
            obj.style.width=0;
            obj.style.height=0;
            obj.style.width=`${cx}px`;
            obj.style.height=`${cy}px`;
            that.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                w=Math.abs(cx-ox);
                h=Math.abs(cy-oy);
                minX=ox>=cx?cx:ox;
                minY=oy>=cy?cy:oy;
                obj.style.left=`${minX}px`;
                obj.style.top=`${minY}px`;
                obj.style.width=`${w}px`;
                obj.style.height=`${h}px`;
            }
            that.mask.onmouseup=function(){
                that.temp=that.ctx.getImageData(minX,minY,w,h);
                // that.ctx.clearRect(minX, minY, w, h);
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.ctx.putImageData(that.temp,minX,minY);
                obj.style.display='none';
                that.mask.onmousemove=null;
                this.onmouseup=null;
                that.drag(minX,minY,obj);
            }
        }
    }
    drag(x,y,obj){
    	let that=this;
    	this.mask.onmousedown=function(e){
            let cx=e.offsetX,cy=e.offsetY;
            e.preventDefault();
            that.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                // e.preventDefault();
                let lefts=x+ox-cx,
                    tops=y+oy-cy;
                obj.style.left=`${lefts}px`;
                obj.style.top=`${tops}px`;
                that.ctx.clearRect(0, 0, that.cw, that.ch);
                if(that.history.length){
                	that.ctx.putImageData(that.history[that.history.length-1],0,0)
                }
                that.ctx.putImageData(that.temp,lefts,tops);
            }
            that.mask.onmouseup=function(){
            	that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
            	that.temp=null;
            	obj.style.display='none';
            	that.mask.onmousemove=null;
            	this.onmouseup=null;
            }
    	}
    }
    reverse(){
    	let imageData=this.ctx.getImageData(0, 0, this.cw, this.ch);
		for(let i=0;i<imageData.data.length;i+=4){
			imageData.data[i]=255-imageData.data[i];
			imageData.data[i+1]=255-imageData.data[i+1];
			imageData.data[i+2]=255-imageData.data[i+2];
		}
		this.ctx.putImageData(imageData,0,0);
    }
}