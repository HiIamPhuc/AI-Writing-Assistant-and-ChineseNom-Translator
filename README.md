# AI-Writing-Assistant-and-ChineseNom-Translator

This repository contains the implementation for a web-based platform offering an **AI Writing Assistant and a ChineseNom Translator**.

## Project Overview

The project aims to develop a web platform with two primary functions:

1.  **Rewriting paragraphs** according to specific styles requested by the user.
2.  **Translating** from modern Vietnamese to Chinese-Nom characters.

## Key Features

*   **AI-Powered Writing Assistance:** Rewrite text in various styles (e.g., humorous, academic, concise, inspiring) using an advanced language model.
*   **Chinese-Nom Translation:** Supports translation from Chinese-Nom to modern Vietnamese.

## Technology Stack

The project utilizes a combination of languages and frameworks:

*   **Front-end:**
    *   **React**
    *   **TailwindCSS**
    *   **TypeScript**
*   **Back-end:**
    *   **Django**
    *   **PostgreSQL**

## Models Used

The platform integrates two distinct AI models to power its core functionalities:

1.  **Gemini Model (for AI Writing Assistant)**
    *   **Capabilities:** Utilized for rewriting text.
    *   **Implementation:** The system uses the **Gemini API**, integrated into the Django backend via a `GeminiClient` class.

2.  **YOLO11 Model (for Chinese-Nom Translator - Character Recognition)**
    *   **Purpose:** Specifically used for **Optical Character Recognition (OCR)** of Chinese-Nom characters from images.
    *   **Implementation:** The model is trained on a custom dataset derived from historical Vietnamese texts like Lục Vân Tiên and various editions of Truyện Kiều and Đại Việt Sử Ký Toàn Thư (referenced from [https://www.kaggle.com/datasets/quandang/nomnaocr](https://www.kaggle.com/datasets/quandang/nomnaocr)).

## Installation and Setup

To set up and run the project, you need to:

1.  Clone the repository.
2.  Navigate into the `client` and `server` directories.
3.  Install dependencies for both the frontend (Node.js/npm/yarn for React/TypeScript/TailwindCSS), the backend (Python/pipenv for Django).
4.  Set up and configure a PostgreSQL database and update backend settings to connect to it.
5.  Set up API keys for the Gemini model.
6.  Run the backend server and the frontend development server.

## Further Information

For more detailed information regarding the models, data preparation methodology, training process, evaluation metrics, and the in-depth challenges faced and solutions applied (particularly for the YOLO11 model), please refer to the **`Report.pdf`** document.
