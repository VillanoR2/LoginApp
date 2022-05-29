<template>
  <div class="register">
       <form class="mx-5" @submit.prevent="registrarCliente">
            <div class="form-group ">
                <label for="inputNombre_Usuario">Nombre de usuario</label>
                <input type="text" v-model.trim="nombre_Usuario" class="form-control" id="inputNombre_Usuario"
                    placeholder="Nombre de usuario">
            </div>
            <div class="form-group">
                <label for="inputNombre">Nombre</label>
                <input type="text" v-model.trim="nombre" class="form-control" id="inputNombre" placeholder="Nombre">
            </div>
            <div class="form-group">
                <label for="inputApellido">Apellidos</label>
                <input type="text" v-model.trim="apellido" class="form-control" id="inputApellido"
                    placeholder="Apellidos">
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
            </div>

            <div class="form-group">
                <label for="inputEmail">Correo electronico</label>
                <input type="email" v-model.trim="email" class="form-control" id="inputEmail"
                    aria-describedby="emailHelp" placeholder="Correo electronico">
                <small id="emailHelp" class="form-text text-muted">No compartas tu correo con nadie más.</small>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>