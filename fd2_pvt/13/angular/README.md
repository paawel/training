1. ng new sample-app
2. ng serve
3. app-root tag and component name, main.ts
4. classic example
    a. In module file add FormsModule in imports
    b. <div style="text-align:center" class="container">
         <input type="text"
                [(ngModel)]="user">

         <div class="col-sm-5">
           {{ user }}
         </div>

         <ul class="list-group">
           <li class="list-group-item" *ngFor="let admin of admins">
               {{admin.name}}
           </li>
         </ul>
       </div>

    c. user = 'default value';   admins = [
                                   {name:'John', age:25},
                                   {name:'Mary', age:40},
                                   {name:'Peter', age:85}
                                 ];

      inside Component
5. Lets add Bootstrap
6. npm i bootstrap --save-dev
7. angular.json -> styles -> "node_modules/bootstrap/scss/bootstrap.scss",
8. rebuild, check on UI
9. ng g с sample