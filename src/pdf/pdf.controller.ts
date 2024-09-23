/* eslint-disable prettier/prettier */

import { Controller, Get } from '@nestjs/common';

import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
    constructor(private readonly pdfService: PdfService) { }

    @Get('generate')
    generatePDF(): string {
        return this.pdfService.generatePDF();
    }
}
