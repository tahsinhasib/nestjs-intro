### NestJS Intro project steps

<table>
    <tr>
        <th>Step</th>
        <th>Breakdown</th>
    </tr>
    <tr>
        <td>Step - 1</td>
        <td>In the working directory terminal run the following command: <br> <code>npm i -g @nestjs/cli <br> nest new project-name</code></td>
    </tr>
    <tr>
        <td>Step - 2</td>
        <td>To run in watch mode run the following command: <br> <code>npm run start:dev</code></td>
    </tr>
    <tr>
        <td>Step - 3</td>
        <td>To run in watch mode run the following command: <br> <code>npm run start:dev</code></td>
    </tr>
    <tr>
        <td>Step - 4</td>
        <td>Crate Module, Controller, Service using <br><code>nest g module [modulename]</code><br><code>nest g controller [controllername]</code><br><code>nest g service [servicename]</code></td>
    </tr>
    <tr>
        <td>Step - 5</td>
        <td>Install class validator using following command: <br><code>npm i --save class-validator class-transformer</code></td>
    </tr>
    <tr>
        <td>Step - 6</td>
        <td>For database operation use following command: <br><code>npm install --save typeorm pg</code></td>
    </tr>
    <tr>
        <td>Step - 7</td>
        <td>For database operation use following command: <br><code>npm install --save @nestjs/typeorm typeorm pg</code></td>
    </tr>
    <tr>
        <td>Step - 8</td>
        <td>Inside the <code>app.module.ts</code> file paste the code in imports angular bracket: <br><code>imports:[....., "check database tips below"]</code><br> The entity name will be your table name</td>
    </tr>
    <tr>
        <td>Step - 9</td>
        <td>Create an entity <code>name.entity.ts</code> file and paste the code from "Entity tips below (you can modify)"</td>
    </tr>
    <tr>
        <td>Step - 10</td>
        <td>In your specific <code>name.module.ts</code> file import this code: <code>imports: [TypeOrmModule.forFeature([EntityName])]</code></td>
    </tr>
    <tr>
        <td>Step - 11</td>
        <td>Inside your<code>name.service.ts</code> file add this constructor: <code>constructor(@InjectRepository(EntityName) private myRepo: Repository<EntityName>){}</code> <br> NOTE: Errors can be fixed by retyping</td>
    </tr>
</table>




### Git tips

```sh
git init
git remote add origin 'link'
git add .
git push origin main
```

### Database tips
```sh
TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'test',
        entities: [
            EntityName
        ],
        synchronize: true,
      })
```


### Entity tips
```sh
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}
```