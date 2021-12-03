import { gql } from 'apollo-server';
//EL SCHEMA ES LA INTERFAZ ENTRE EL CLIENTE Y EL SERVIDOR
const projectType = gql `
#Project - proyectos
    type Project {
        _id: ID!,
        nom_proyecto: String!
        obj_gen: String!
        obj_esp: [String]!
        presupuesto: Float!
        fecha_inicio: String!
        fecha_fin: String!
        doc_lider: ID!
        estado: ProjectStatus!
        fase: Phase
        
    }
` ; //type Project es un objeto compuesto los nombre de los campos deben concidir con los de la base de datoa para que no de error

const enums = gql`
   #Enum for status values - estado
   enum ProjectStatus{
       Activo
       Inactivo
   }
   enum Phase{
       Iniciando
       En desarrollo
       Terminado

   }
`;

const queries = gql `
  #Query todos los proyectos
  type Query {
    allProjects: [Project]
  }
  
  type Query {
    project(_id:ID): Project
  }

`;
// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS SE DEBE LLAMAR EN LOS RESOLVERS
const mutations = gql`
   type Mutation {
       addProject(input: AddProjectInput!): Project 
   }

`;
///OJO:revisar ya que puede esta malo el nombre para input
const inputs = gql `
  input AddProjectInput {
    nom_proyecto: String!
        obj_gen: String!
        obj_esp: String!
        presupuesto: Float!
        fecha_inicio: String!
        fecha_fin: String!
        estado: ProjectStatus!
        fase: Phase!
       }
`


export default[
  projectType,
  enums,
  queries,
  mutations,
  inputs,

];

/*
const projectType = gql `
#Project - proyectos
    type Project {
        _id: ID!,
        nom_proyecto: String!
        obj_gen: String!
        obj_esp: String!
        presupuesto: Float!
        fecha_inicio: String!
        fecha_fin: String!
        doc_lider: ID!
        estado: ProjectStatus!
        fase: Phase!
        lider: User!
    }
    ` ; */