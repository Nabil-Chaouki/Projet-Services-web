using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GC.DAL
{
    public partial class CLContext : DbContext
    {
        public CLContext()
        {
        }

        public CLContext(DbContextOptions<CLContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Client> Clients { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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
