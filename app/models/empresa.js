module.exports = (sequelize, DataTypes)=>{

    const Empresas = sequelize.define('Empresas',{
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoincrement: true
        },
        idUsuario: {
            type: Sequelize.BIGINT,
            references:{
                model: usuarios,
                key: 'id'
            }
        },
        nombre: {
            type: Sequelize.TEXT
        },
        rut: {
            type: Sequelize.TEXT
        },
        correo: {
            type: Sequelize.TEXT
        },
        direccion: {
            type: Sequelize.TEXT
        },
        comuna: {
            type: Sequelize.INTEGER
        },
        region: {
            type: Sequelize.INTEGER
        },
        telefono1: {
            type: Sequelize.TEXT
        },
        telefono2: {
            type: Sequelize.TEXT
        },
        tipoEmpresa: {
            type: Sequelize.INTEGER
        },
        flag: {
            type: Sequelize.TEXT, defaultValue:true, allowNull: true
        }
    });
/*
    OrderItem.associate = (models) => {
        OrderItem.belongsTo(models.Order,{
            onDelete: 'CASCADE',
            foreignKey:{
                allowNull: false,
            },
        });
    };
*/
  Empresas.sync();
  return Empresas;  
    

};