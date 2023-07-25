//4
import axios from 'axios';
import { defineStore } from 'pinia';

//5
export const useSestaoStore = defineStore("sestaoStore",{
    state:() =>({
        idPost:"",
        nombre: "StorePinia",
        postDetalles: [],
        storeCategotia:""
    }),
    actions:{
        async  guardarId(id){
            this.idPost = id;
            console.log("ver el id",this.idPost);
        },

        // -----
        async obtenerPostDetalles(){
            const url = "http://127.0.0.1:5000/anuncio/" + this.idPost;
            try{
                const response = await axios.get(url);
                console.log("valores de la ruta", response);
                this.postDetalles = response.data;
                console.log("desde obtener post detalles store",this.postDetalles);
                return this.postDetalles;
            }catch(error) {
                console.error("Anuncio no obtenido",error);
        }
    }
}

});