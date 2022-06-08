using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Client.Back.Models
{
    public partial class CLContext : DbContext
    {
     

        public CLContext(DbContextOptions<CLContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Client> Clients { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "French_CI_AS");

            modelBuilder.Entity<Client>(entity =>
            {
                entity.HasKey(e => e.RefContact);

                entity.Property(e => e.RefContact).HasColumnName("Ref_Contact");

                entity.Property(e => e.Adresse)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("adresse");

                entity.Property(e => e.CodePostal)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("code_postal");

                entity.Property(e => e.Nom)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Prenom)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ville)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ville");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
