import { Router } from 'express';
import { postCategory, getCategories, getCategoryById, updateCategoryById, deleteCategoryById } from '../controllers/category.controller';

const router = Router();

router.get("/", getCategories);
router.post("/", postCategory);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategoryById);
router.delete('/:id', deleteCategoryById);

export default router;