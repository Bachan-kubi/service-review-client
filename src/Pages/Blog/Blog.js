import React from "react";

const Blog = () => {
  return (
    <div className="bg-light">
      <div className="p-4">
        <h2 className="text-3xl text-bold text-center m-3">
          Difference between SQL and NoSQL.
        </h2>
        <h5 className="text-semibold m-2">
          1. SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called
          RDBMS or Relational Databases, whereas NoSQL is a Non-relational or
          Distributed Database.
        </h5>
        <h5 className="text-semibold m-2">
          2. Comparing SQL vs NoSQL databases, SQL databases are table-based
          databases, whereas NoSQL databases can be document-based, key-value
          pairs, and graph databases.
        </h5>
        <h5 className="text-semibold m-2">
          3. SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases have a predefined schema, whereas
          NoSQL databases use a dynamic schema for unstructured data.
        </h5>
        <h5 className="text-semibold m-2">
          4. Comparing NoSQL vs SQL performance, SQL requires specialized DB
          hardware for better performance while NoSQL uses commodity hardware.
        </h5>
      </div>
      <div>
        <h2 className="text-4xl text-bold text-center m-3">
          What is JWT, and how does it work?
        </h2>
        <h5 className="text-semibold m-2">
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed. JWTs can be signed using a
          secret (with the HMAC algorithm) or a public/private key pair using
          RSA or ECDSA. Although JWTs can be encrypted to also provide secrecy
          between parties, we will focus on signed tokens. Signed tokens can
          verify the integrity of the claims contained within it, while
          encrypted tokens hide those claims from other parties. When tokens are
          signed using public/private key pairs, the signature also certifies
          that only the party holding the private key is the one that signed it.
        </h5>
      </div>
    </div>
  );
};

export default Blog;
