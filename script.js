class Estudiante{
    constructor(nombre, apellidoPaterno,apellidoMaterno,fechaNac,carrera){
        this.nombre=nombre;
        this.apellidoPaterno=apellidoPaterno;
        this.apellidoMaterno=apellidoMaterno;
        this.fechaNac=fechaNac;
        this.carrera=carrera;
    }
    
}

 // Crear instancias de Usuario
 const usuario1 = new Estudiante("Gabriel", "Donaldson", "Pacheco", "31/03/2001", "Ing. Sistemas");
 const usuario2 = new Estudiante("Axel", "Andia","Camacho","20/04/2003","Lic. Gastronomia");
 const usuario3 = new Estudiante("Fernando", "Flores","Lopez","12/07/2002","Phd. Medicina");

 
 $(document).ready(function () {
    $("#registrarBoton").click(function () { 
        const estudianteNombre= $("#name").val();
        const estudianteApellidoPaterno= $("#apellidoPat").val();
        const estudianteApellidoMaterno= $("#apellidoMat").val();
        const estudianteFechaNac=$("#fechaNac").val();
        const estudianteCarrera = $("#carrera").find(":selected").val();
        
         // Verificar las credenciales
      if (verificarCredenciales(estudianteNombre, estudianteApellidoPaterno,estudianteApellidoMaterno,estudianteFechaNac,estudianteCarrera)) {
        // Credenciales válidas, mostrar mensaje de éxito
        $("#errorMessage").text("Se Registro Correctamente").css("color", "green");
      } else {
        // Credenciales inválidas, mostrar mensaje de error
        $("#errorMessage").text("Credenciales incorrectas").css("color", "red");
      }
    });
 });

 function verificarCredenciales(nombre, apellidoPat,apellidoMat,fechaNac,carrera) {
    // Array de usuarios
    const usuarios = [usuario1, usuario2, usuario3];
  
    // Verificar si las credenciales son correctas
    for (const usuario of usuarios) {
      if (usuario.nombre === nombre && usuario.apellidoPaterno === apellidoPat && usuario.apellidoMaterno === apellidoMat && usuario.fechaNac===fechaNac && usuario.carrera===carrera) {
        return true; // Credenciales válidas
      }
    }
  
    return false; // Credenciales inválidas
  }
 console.log(usuario1);
 console.log(usuario2);
 console.log(usuario3);
