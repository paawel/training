1. ng new sample-app
2. ng serve
3. classic example
    a. In module file add FormsModule in imports
    b. <div style="text-align:center">
         <input type="text"
                [(ngModel)]="user">

         <div>
           {{ user }}
         </div>
       </div>
    c. user = 'default value'; inside Component
4. Lets add Bootstrap
5. npm i bootstrap --save-dev
6. angular.json -> styles -> "node_modules/bootstrap/scss/bootstrap.scss",
7. rebuild, check on UI
8. app-root tag and component name, main.ts
9. ng g с sample