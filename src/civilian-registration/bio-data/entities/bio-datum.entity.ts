import { LinkedIdentity } from 'src/civilian-registration/linked-identity/entities/linked-identity.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class BioData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column({ default: true })
  lastName: string;

  @Column({ nullable: true })
  nationality: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  countryOfBirth: string;

  @Column({ default: true })
  stateOfBirth: string;

  @Column({ default: true })
  townOfBirth: string;

  @Column({ default: true })
  residentialaddress: string;

  @Column({ default: true })
  profession: string;

  @Column({ default: true })
  isActive: boolean;

}
