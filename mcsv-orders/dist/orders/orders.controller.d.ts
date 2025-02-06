import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderPaginationDto } from './dto/order-pagination.dto';
import { ChangeOrderStatusDto } from './dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<{
        OrderItem: {
            name: any;
            productId: number;
            quantity: number;
            price: number;
        }[];
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        totalItems: number;
        paid: boolean;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(orderPaginationDto: OrderPaginationDto): Promise<{
        data: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            totalAmount: number;
            totalItems: number;
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
        status: import(".prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        totalItems: number;
        paid: boolean;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    changeOrderStatus(changeOrderStatusDto: ChangeOrderStatusDto): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        totalItems: number;
        paid: boolean;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
