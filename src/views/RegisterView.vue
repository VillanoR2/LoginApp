<template>
    <div class="register">
        <form class="mx-5" @submit.prevent="registrarCliente">
            <div class="form-group ">
                <label for="inputNombre_Usuario">Nombre de usuario</label>
                <input type="text" v-model.trim="nombre_Usuario" class="form-control" id="inputNombre_Usuario"
                    placeholder="Nombre de usuario">
                    <div v-if="pulsado && !$v.nombre_Usuario.required" class="mensajeError">Debe escribir un nombre de usuario</div>
            </div>
            <div class="form-group">
                <label for="inputNombre">Nombre</label>
                <input type="text" v-model.trim="nombre" class="form-control" id="inputNombre" placeholder="Nombre">
                    <div v-if="pulsado && !$v.nombre.required" class="mensajeError">Debe escribir un nombre</div>

            </div>
            <div class="form-group">
                <label for="inputApellido">Apellidos</label>
                <input type="text" v-model="apellido" class="form-control" id="inputApellido"
                    placeholder="Apellidos">
                    <div v-if="pulsado && !$v.apellido.required" class="mensajeError">Debe escribir sus apellidos</div>

            </div>
            <div class="form-group">
                <label for="inputRol">Rol</label>
                <select id="inputRol" v-model="rol" class="form-control">
                    <option value="Sin Rol" selected>Sin Rol</option>
                    <option value="Desarrollador">Desarrollador</option>
                    <option value="Tester">Tester</option>
                    <option value="Analista">Analista</option>
                </select>
            </div>

            <div class="form-group">
                <label for="inputDepartamento">Departamento</label>
                <select id="inputDepartamento" v-model.trim="departamento" class="form-control">
                    <option value="Oficinas" selected>Oficinas</option>
                    <option value="Software y Testing">Software & Testing</option>
                    <option value="Quality Assurence">Quality Assurence</option>
                </select>
            </div>
            <div class="form-group">
                <label for="inputTelefono">Teléfono</label>
                <input type="text" v-model.trim="telefono" class="form-control" id="inputApellido"
                    placeholder="Teléfono">
                    <div v-if="pulsado && !$v.telefono.required" class="mensajeError">Debe escribir un número de telefono</div>
                    <div v-if="pulsado && !$v.telefono.minLength" class="mensajeError">Debe escribir un número valido de 10 digitos</div>
                    <div v-if="pulsado && !$v.telefono.maxLength" class="mensajeError">Solo se permiten hasta 10 digitos</div>


            </div>

            <div class="form-group">
                <label for="inputEmail">Correo electronico</label>
                <input type="email" v-model.trim="email" class="form-control" id="inputEmail"
                    aria-describedby="emailHelp" placeholder="Correo electronico">
                    <div v-if="pulsado && !$v.email.required" class="mensajeError">Debe escribir un coreo</div>
                    <div v-if="pulsado && !$v.email.email" class="mensajeError">Formato de correo incorrecto</div>
            </div>

            <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
    </div>
</template>

<script>
import { required, email, minLength, maxLength} from 'vuelidate/lib/validators';
export default {
    data() {
        return {
            mensajePeticion: "",
            nombre_Usuario: "",
            nombre: "",
            apellido: "",
            rol: "",
            departamento: "",
            telefono: "",
            email: "",
            bindAlias: "",
            pulsado: false
        }
    },
    validations: {
        nombre_Usuario: { required },
        nombre: { required },
        apellido: { required },
        telefono: { required, minLength : minLength(10) ,maxLength : maxLength(10)},
        email: { required , email,  minLength : minLength(15) ,maxLength : maxLength(255)},
    },
    mounted() {

    },
    unmounted() {

    },
    methods: {
        enviarPeticion() {
            const body = {
                authCode: this.$authCode,
                usuarioDto: {
                    id: "0",
                    nombre_Usuario: this.nombre_Usuario,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    rol: this.rol,
                    departamento: this.departamento,
                    telefono: this.telefono,
                    email: this.email,
                    bindAlias: this.nombre_Usuario
                }
            }

            const requestOptions = {
                method: "POST",
                headers: new Headers({
                    "Content-Types": "application/json",
                }),
                body: JSON.stringify(body),
                mode: 'no-cors'
            };

            fetch("http://www.serverlog.somee.com/api/Usuarios/register", requestOptions)
                .then((response) => {
                    if (response.status == 201) {
                        response.json().then((json) => {
                            this.$userData = json
                            this.$router.push("/user");
                        }).catch((error) => {
                            console.error("Error en el parse a json en login ", error)
                        })
                        this.mensajePeticion = "Registro exitoso";

                    } else if (response.status == 400) {
                        this.mensajePeticion = "Datos Invalidos";
                    } else {
                        this.mensajePeticion = "Peticion Fallida (No manejada)";
                        console.error("Estado de la respuesta no manejado", response);
                    }
                }).catch((error) => {
                    console.error("Error en la peticion", error)
                })
        },
        validarDatos() {
            let valido = false;
            if(!this.$v.$invalid){
                valido = true
                }
            return valido

        },
        registrarCliente() {
            this.pulsado = true;
            
            if(this.validarDatos()){

            this.enviarPeticion();
            }
        }
    }
}
</script>