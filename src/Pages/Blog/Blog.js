import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-4xl text-bold text-center m-3">Difference between SQL and NoSQL.</h2>
        <h5 className="text-semibold m-2 text-2xl">
          1. SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS
          or Relational Databases, whereas NoSQL is a Non-relational or
          Distributed Database.
          </h5>
          <h5 className="text-semibold m-2 text-2xl">2. Comparing SQL vs NoSQL databases, SQL databases
          are table-based databases, whereas NoSQL databases can be
          document-based, key-value pairs, and graph databases.
          </h5> 
          <h5 className="text-semibold m-2 text-2xl">3. SQL databases are vertically scalable, while NoSQL databases are horizontally
          scalable. SQL databases have a predefined schema, whereas NoSQL
          databases use a dynamic schema for unstructured data. 
          </h5>
          <h5 className="text-semibold m-2 text-2xl">4. Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
            </h5>        
      </div>
      <div>
        <h2 text-4xl text-bold text-center m-3>What is JWT, and how does it work?</h2>
      </div>
    </div>
  );
};

export default Blog;
