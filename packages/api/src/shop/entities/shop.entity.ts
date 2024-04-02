import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum ShopStatus {
  ACTIVE = 'ACTIVE',
  UNACTIVE = 'UNACTIVE',
  DISABLED = 'DISABLED',
}

@Entity()
export class Shop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  domain: string;

  @Column({
    type: 'enum',
    enum: ShopStatus,
    default: ShopStatus.DISABLED,
  })
  status: ShopStatus;

  @ManyToOne(() => User, (user) => user.shops, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Product, (product) => product.shop, { onDelete: 'CASCADE' })
  products: Product[];
}
