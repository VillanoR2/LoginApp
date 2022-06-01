<template>
  <div class="user">
    <form class="mx-5"></form>
    <div class="form-group ">
      <label for="labelTitle">Datos de Usuario</label>
       </div>


  </div>
</template>

<script>

export default {
  name: 'UserView',
  data() {
    return {
      nombre_Usuario: "",
      nombre: "",
      apellido: "",
      rol: "",
      departamento: "",
      telefono: "",
      email: ""
    }
  },
  mounted() {
    console.log(this.userData)
  },
  unmounted() {
    let scriptOne = document.getElementById("scrpitTransmitOneRecive")
    document.head.removeChild(scriptOne);

    let scriptTwo = document.getElementById("scrpitTransmitTwoRecive")
    document.head.removeChild(scriptTwo);

    let metaOne = document.getElementById("metaTransmitOneRecive")
    document.head.removeChild(metaOne);

  },
  methods: {
  }
}

</script>