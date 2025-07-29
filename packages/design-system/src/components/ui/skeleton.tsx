import { cn } from '../../lib/utils';
import './skeleton.css';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className="zephyr-design-system">
      <div
        data-slot="skeleton"
        className={cn('bg-accent animate-pulse rounded-md', className)}
        {...props}
      />
    </div>
  );
}

export { Skeleton };
