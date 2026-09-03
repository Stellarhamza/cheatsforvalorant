export function initContentShowcaseCarousels() {
	document.querySelectorAll<HTMLElement>('[data-content-showcase]').forEach((root) => {
		if (root.dataset.carouselReady === 'true') return;
		root.dataset.carouselReady = 'true';

		const viewport = root.querySelector<HTMLElement>('.embla__viewport');
		const container = root.querySelector<HTMLElement>('.embla__container');
		if (!viewport || !container) return;

		const slides = [...container.querySelectorAll<HTMLElement>('.embla__slide')];
		if (!slides.length) return;

		let offset = 24.5;
		let dragStartX = 0;
		let dragStartOffset = 0;
		let isDragging = false;
		let velocity = 0;
		let lastX = 0;
		let lastTime = 0;
		let raf = 0;

		const slideStride = () => {
			const first = slides[0];
			if (!first) return viewport.clientWidth * 0.5;
			const style = getComputedStyle(first);
			const spacing = parseFloat(getComputedStyle(container).getPropertyValue('--slide-spacing')) || 48;
			return first.getBoundingClientRect().width + spacing * 0.15;
		};

		const clampOffset = (value: number) => {
			const stride = slideStride();
			const min = -(slides.length - 1) * stride * 0.55;
			const max = stride * 0.35;
			return Math.max(min, Math.min(max, value));
		};

		const applyContainerTransform = () => {
			container.style.transform = `translate3d(${offset}px, 0px, 0px)`;
		};

		const updateSlideScales = () => {
			const viewportRect = viewport.getBoundingClientRect();
			const centerX = viewportRect.left + viewportRect.width / 2;

			slides.forEach((slide) => {
				const card = slide.querySelector<HTMLElement>('.embla__slide__container');
				if (!card) return;

				const rect = slide.getBoundingClientRect();
				const slideCenter = rect.left + rect.width / 2;
				const distance = Math.abs(slideCenter - centerX);
				const norm = Math.min(distance / (viewportRect.width * 0.45), 1);
				const scale = 1 - norm * 0.107143;
				const translateY = norm * 1.07143;
				const translateX = norm >= 0.85 && slideCenter < centerX ? 1 : 0;

				card.style.transform = `scale(${scale}) translateY(${translateY}%) translateX(${translateX}rem)`;
			});
		};

		const render = () => {
			applyContainerTransform();
			updateSlideScales();
		};

		const onPointerDown = (event: PointerEvent) => {
			if (event.button !== 0) return;
			isDragging = true;
			dragStartX = event.clientX;
			dragStartOffset = offset;
			lastX = event.clientX;
			lastTime = performance.now();
			velocity = 0;
			viewport.classList.add('is-dragging');
			viewport.setPointerCapture(event.pointerId);
		};

		const onPointerMove = (event: PointerEvent) => {
			if (!isDragging) return;
			const now = performance.now();
			const dt = now - lastTime || 16;
			velocity = (event.clientX - lastX) / dt;
			lastX = event.clientX;
			lastTime = now;
			offset = clampOffset(dragStartOffset + (event.clientX - dragStartX));
			render();
		};

		const onPointerUp = (event: PointerEvent) => {
			if (!isDragging) return;
			isDragging = false;
			viewport.classList.remove('is-dragging');
			try {
				viewport.releasePointerCapture(event.pointerId);
			} catch {
				/* ignore */
			}

			offset = clampOffset(offset + velocity * 120);
			render();
		};

		viewport.addEventListener('pointerdown', onPointerDown);
		viewport.addEventListener('pointermove', onPointerMove);
		viewport.addEventListener('pointerup', onPointerUp);
		viewport.addEventListener('pointercancel', onPointerUp);

		const onResize = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(render);
		};

		window.addEventListener('resize', onResize, { passive: true });
		render();
	});
}

if (typeof document !== 'undefined') {
	document.addEventListener('astro:page-load', initContentShowcaseCarousels);
	document.addEventListener('DOMContentLoaded', initContentShowcaseCarousels);
}
