import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FormExample1() {
  return (
    <form>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="mt-1">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          required
          minLength={3}
        />
      </div>

      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
}
