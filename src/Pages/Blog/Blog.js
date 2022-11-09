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
      <div>
        <h2 className="text-4xl text-bold text-center m-3">
          What is the Difference between Javascript and Node.js?
        </h2>
        <h4 className="text-semibold m-2">
          1. NodeJS : NodeJS is a cross-platform and opensource Javascript
          runtime environment that allows the javascript to be run on the
          server-side. Nodejs allows Javascript code to run outside the browser.
          Nodejs comes with a lot of modules and mostly used in web development.
          2. JavaScript : Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance.
        </h4>
      </div>
      <div>
        <h3 className="text-4xl text-bold text-center m-3">How does NodeJS handle multiple requests at the same time?</h3>
        <h3 className="text-semibold m-2">
          We know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded. How NodeJS
          handle multiple client requests? NodeJS receives multiple client
          requests and places them into EventQueue. NodeJS is built with the
          concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them.
          EventLoop is the listener for the EventQueue. If NodeJS can process
          the request without I/O blocking then the event loop would itself
          process the request and sends the response back to the client by
          itself. But, it is possible to process multiple requests parallelly
          using the NodeJS cluster module or worker_threads module.
        </h3>
      </div>
    </div>
  );
};

export default Blog;
