/* eslint-disable prettier/prettier */

import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

import { Injectable } from '@nestjs/common';

@Injectable()
export class PdfService {
    generatePDF() {
        // Create a new PDF document
        const doc = new PDFDocument();

        // Define the output file path
        const outputPath = 'output.pdf';

        // Pipe the PDF to a writable stream (file system)
        // eslint-disable-next-line prettier/prettier
        const writeStream = fs.createWriteStream(outputPath);
        doc.pipe(writeStream);

        // Add some content
        doc.fontSize(25).text('Hello from NestJS PDF Generator!', 100, 100);

        // Add another page
        doc.addPage().fontSize(20).text('This is page 2.', 100, 100);

        // Finalize the document
        doc.end();

        // Return a success message
        return 'PDF Generated successfully';
    }
}
