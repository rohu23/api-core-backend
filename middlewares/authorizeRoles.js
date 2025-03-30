const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      console.log("User role:", req.user.role); // 🧪 Add this
      console.log("Allowed roles:", allowedRoles);
      
      const userRole = req.user.role;
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: "Access denied: insufficient permissions" });
      }
      next();
    };
  };
  
module.exports = authorizeRoles;
  