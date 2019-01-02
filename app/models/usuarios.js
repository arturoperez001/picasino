module.exports = (Sequelize,data)=>{
const Usuarios = Sequelize.define('Usuarios', {
    id: {type: Sequelize.BIGINT, primaryKey :true, autoIncrement:true},
    correo: Sequelize.TEXT,
    nombre: Sequelize.TEXT,
    rut: Sequelize.TEXT,
    clave: Sequelize.TEXT,
    hash: Sequelize.TEXT,
    lastLog: Sequelize.DATE,
    flag: Sequelize.BOOLEAN
  });
  
  Usuarios.sync();
    
  return Usuarios;
    

};