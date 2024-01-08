import { Shop } from 'src/shop/entities/shop.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'default' })
  role: string;

  @OneToMany(() => Shop, (webapp) => webapp.user, { onDelete: 'CASCADE' })
  shops: Shop[];
}
