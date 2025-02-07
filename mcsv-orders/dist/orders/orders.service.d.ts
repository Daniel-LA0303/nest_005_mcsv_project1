import { OnModuleInit } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ChangeOrderStatusDto } from './dto';
import { ClientProxy } from '@nestjs/microservices';
import { OrderPaginationDto } from './dto/order-pagination.dto';
import { PrismaClient } from '@prisma/client';
export declare class OrdersService extends PrismaClient implements OnModuleInit {
    private readonly productsClient;
    private readonly logger;
    constructor(productsClient: ClientProxy);
    onModuleInit(): Promise<void>;
    create(createOrderDto: CreateOrderDto): Promise<{
        OrderItem: {
            name: any;
            productId: number;
            quantity: number;
            price: number;
        }[];
        id: string;
        totalAmount: number;
        totalItems: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        paid: boolean;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(orderPaginationDto: OrderPaginationDto): Promise<{
        data: {
            id: string;
            totalAmount: number;
            totalItems: number;
            status: import(".prisma/client").$Enums.OrderStatus;
            paid: boolean;
            paidAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        meta: {
            total: number;
            page: number;
            lastPage: number;
        };
    }>;
    findOne(id: string): Promise<{
        OrderItem: {
            name: any;
            productId: number;
            quantity: number;
            price: number;
        }[];
        id: string;
        totalAmount: number;
        totalItems: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        paid: boolean;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    changeStatus(changeOrderStatusDto: ChangeOrderStatusDto): Promise<{
        id: string;
        totalAmount: number;
        totalItems: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        paid: boolean;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
