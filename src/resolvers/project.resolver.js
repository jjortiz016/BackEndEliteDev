// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS EN EL SCHEMA SE DEBE LLAMAR EN LOS RESOLVERS
import Projects from "../models/projects.models.js";
import Users from "../models/users.models.js";

const allProjects = async () => { // funcion allProjects se llama igual que en schema
  const project= await Projects.find();
  return project;  
};

const project = async (parent, args, context, info) => { // funcion projects se llama igual que en schema, siempre 4 argumentos, el parent es el padre del query que se esta haciendo, arg argumentos o parametros como id, context funciones de validacion, info
 const project = await Projects.findById(args._id);
 return project;

};
//00:41
const proyectByName = async (parent, args, context, info) => {
  const projectbyname = await Projects.findOne({nom_proyecto : args.nom_proyecto});  // se utiliza find si va a devolver varios registros, find devuelve un arreglo
  return projectbyname;
}



const addProject = async (parent, args, context, info) =>{  // funcion addProject llama igual que en schema
    let newproject = new Projects(args.input); //instancia del modelo de project
    newproject = await newproject.save();
    return newproject;

}

const leader = async (parent, args, context, info) => { // funcion userr se llama igual que en schema, siempre 4 argumentos, el parent es el padre del query que se esta haciendo, arg argumentos o parametros como id, context funciones de validacion, info
  const userbyid = await Users.findById(parent.doc_lider); //devuelve el usuario por id ojo  con el parent
  return userbyid;
 
 };


//objeto
export default {  //exportamos el objeto allProjects es una propiedad cuyo valor es una funcion llamada allProjects que es lo mismo que allUsers : value el values seria la constante que tiene una funcion
  projectQueries:{
    allProjects,
    project,
    proyectByName
  },
  Project:{
    leader,
   },
  projectMutations:{
    addProject,
  },
  

  
};
/*
export default {
    Query:{
      allProjects,
      project
    },
    Proyect:{
        leader, 00:47
    }
    Mutation:{
      addProject,
    }
};*/